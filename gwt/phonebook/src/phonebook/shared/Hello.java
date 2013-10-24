package phonebook.shared;

import java.io.Serializable;

public class Hello implements Serializable {
  private static final long serialVersionUID = 1L;

  private String message;

  public Hello(String message) {
    this.message = message;
  }

  // for serializable means
  public Hello() {
  }

  public String getMessage() {
    return message;
  }
}
