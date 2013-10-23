
import sys
import os
from optparse import OptionParser
import codecs


# File codec used when writing text files
DEFAULT_CP = "UTF-8"


###############################################################################
# Options

parser = OptionParser()

parser.add_option("-p", "--package", dest = "package",
  help = "Specifies root package, e.g. com.company.product"
         "This package is used to create directory structure.")
parser.add_option("-n", "--name", dest = "name",
  help = "Specifies project name, used as a project folder name");

# Parse options
(options, args) = parser.parse_args()

###############################################################################
# Helper functions

def die_with(desc):
  """
  die_with(desc)

  Prints  erro  description, gives hints about the 
  usage parameters and exits with the negative error code.
  """
  print desc
  print "Run script with -h or --help parameter to see the usage parameters."
  sys.exit(-1)

def die_if(cond, desc):
  if cond:
    die_with(desc)

def verbose(text):
  """
  verbose(text)

  Prints the provided text if verbosity option is set
  """
  if options.verbose:
    print text

###############################################################################
# Validation

die_if(options.package is None, "Package must be set")
die_if(options.name is None, "Name must be set")

###############################################################################
# Generation

os.mkdir(options.name)

BLDXML_CONTENTS = """<?xml version="1.0"?>
<project name="{0}" basedir="." default="build">
    <!-- Project-specific variables -->
    <property name="app.jarName" value="{0}.jar" />
    <property name="app.mainClass" value="{1}.App" />

    <!-- Catch environment variables to the env name -->
    <property environment="env"/>

    <!-- Configure SDK paths -->
    <property name="m2.repo" value="${{env.HOME}}/.m2/repository" />

    <property name="test.classes" value="target/test/classes" />
    <property name="test.report" value="target/test/report" />

    <target name="prepare"/>

    <target name="clean" description="Cleans this project">
        <delete dir="target" failonerror="false" />
    </target>

    <path id="project.class.path">
        <pathelement location="target/jar/classes"/>
        <!-- Add any additional non-server libs (such as spring) -->
        <!-- <fileset dir="target/lib" includes="**/*.jar"/> -->
    </path>

    <path id="project.test.class.path">
        <pathelement location="${{m2.repo}}/junit/junit/4.8.2/junit-4.8.2.jar"/>
        <pathelement location="${{test.classes}}"/>
    </path>

    <target name="javac" description="Compile java sources">
        <mkdir dir="target/jar/classes"/>
        <javac srcdir="src" includes="**" encoding="UTF-8"
               destdir="target/jar/classes"
               source="1.7" target="1.7" nowarn="true"
               debug="true" debuglevel="lines,vars,source" includeantruntime="false">
            <classpath refid="project.class.path"/>
        </javac>
        <copy todir="target/jar/classes">
            <fileset dir="src" excludes="**/*.java"/>
        </copy>
    </target>

    <target name="build" depends="javac" description="Build this project">
        <jar destfile="target/${{app.jarName}}" basedir="target/jar/classes">
            <manifest>
                <attribute name="Main-Class" value="${{app.mainClass}}"/>
            </manifest>
        </jar>
    </target>

    <target name="testCompile" depends="javac">
        <mkdir dir="${{test.classes}}" />
        <mkdir dir="${{test.report}}" />
        <javac srcdir="test" includes="**" encoding="UTF-8"
               destdir="${{test.classes}}"
               source="1.7" target="1.7" nowarn="true"
               debug="true" debuglevel="lines,vars,source" includeantruntime="false">
            <classpath refid="project.test.class.path"/>
        </javac>
    </target>

    <target name="test" depends="javac, testCompile">
        <junit printsummary="yes" haltonfailure="yes" showoutput="yes">
            <formatter type="xml"/>
            <formatter type="plain" usefile="false" />
            <classpath refid="project.test.class.path"/>
            <batchtest fork="yes" todir="${{test.report}}">
                <fileset dir="test">
                    <include name="**/*Test*.java"/>
                </fileset>
            </batchtest>
        </junit>
    </target>
</project>
""".format(options.name, options.package)

with codecs.open(options.name + "/build.xml", "w", DEFAULT_CP) as fh:
  fh.write(BLDXML_CONTENTS)

pkg_dirs = '/' + options.package.replace('.', '/')
src_dir = options.name + "/src" + pkg_dirs
test_dir = options.name + "/test" + pkg_dirs

# Create dirs
os.makedirs(src_dir)
os.makedirs(test_dir)

# Write file contents
app_contents = """package {0};

public final class App {{
  public static void main(String[] args) {{
    System.out.println("It works!");
  }}
}}
""".format(options.package)

dummy_test_contents = """package {0};

import org.junit.Test;
import static org.junit.Assert.assertTrue;

public final class DummyTest {{
  @Test
  public void shouldTestSomething() {{
    assertTrue(true);
  }}
}}
""".format(options.package)

with codecs.open(src_dir + "/App.java", "w", DEFAULT_CP) as fh:
  fh.write(app_contents)

with codecs.open(test_dir + "/DummyTest.java", "w", DEFAULT_CP) as fh: 
  fh.write(dummy_test_contents)




















