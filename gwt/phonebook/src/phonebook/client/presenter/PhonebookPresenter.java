package phonebook.client.presenter;

import phonebook.shared.Contact;

import java.util.Arrays;
import java.util.List;

/**
 * @author Alexander Shabanov
 */
public final class PhonebookPresenter {

  private final View view;

  public interface View {
    void setGroupInfo(String text);

    void setContacts(List<Contact> contacts);
  }

  public PhonebookPresenter(View view) {
    this.view = view;
    putViewData();
  }

  private void putViewData() {
    view.setGroupInfo("All");
    view.setContacts(Arrays.asList(
        new Contact("Alex", "800.401.2000", "http://www.famfamfam.com/lab/icons/silk/icons/anchor.png", "Note 1"),
        new Contact("Bob", "800.401.2001", "http://www.famfamfam.com/lab/icons/silk/icons/bell.png", null),
        new Contact("Vic", "800.401.2010", "http://www.famfamfam.com/lab/icons/silk/icons/cd.png", "Note 10")));
  }
}
