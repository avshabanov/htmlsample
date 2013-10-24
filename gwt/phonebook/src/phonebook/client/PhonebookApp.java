package phonebook.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import phonebook.client.presenter.PhonebookPresenter;
import phonebook.client.view.PhonebookView;

public class PhonebookApp implements EntryPoint {

  @Override
  public void onModuleLoad() {
    final PhonebookView view = new PhonebookView();
    new PhonebookPresenter(view);
    RootPanel.get().add(view);
  }
}

