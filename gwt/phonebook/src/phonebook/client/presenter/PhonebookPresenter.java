package phonebook.client.presenter;

/**
 * @author Alexander Shabanov
 */
public final class PhonebookPresenter {

  private final View view;

  public interface View {

  }

  public PhonebookPresenter(View view) {
    this.view = view;
  }
}
