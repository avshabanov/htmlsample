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
    view.setContacts(Arrays.asList(new Contact("Alex", "http://www.famfamfam.com/lab/icons/silk/icons/anchor.png", "My Note")));
  }
}
