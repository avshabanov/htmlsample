package phonebook.client.view;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import phonebook.client.presenter.PhonebookPresenter;

/**
 * @author Alexander Shabanov
 */
public final class PhonebookView extends Composite implements PhonebookPresenter.View {
  private static final Binder binder = GWT.create(Binder.class);

  public interface Binder extends UiBinder<Widget, PhonebookView> {
  }

  public PhonebookView() {
    initWidget(binder.createAndBindUi(this));
  }
}
