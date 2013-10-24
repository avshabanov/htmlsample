package phonebook.client.view;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.*;
import com.google.gwt.safehtml.client.SafeHtmlTemplates;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.safehtml.shared.SafeHtmlBuilder;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import phonebook.client.presenter.PhonebookPresenter;
import phonebook.shared.Contact;

import java.util.List;

/**
 * @author Alexander Shabanov
 */
public final class PhonebookView extends Composite implements PhonebookPresenter.View {
  public interface PhonebookViewBinder extends UiBinder<Widget, PhonebookView> {
  }

  private static final PhonebookViewBinder BINDER = GWT.create(PhonebookViewBinder.class);

  public interface Templates extends SafeHtmlTemplates {
    /**
     * The view-mode template
     */
    @SafeHtmlTemplates.Template("<a href='#' class=\"thumb\"><img src='{1}'/></a><span>Contact Name - {0}" +
        "<span class='text-info'>Phone</span></span><p class='text-muted'>{2}</p>")
    SafeHtml contactWithNote(String name, String imageUrl, String note);
  }

  private static Templates TEMPLATES = GWT.create(Templates.class);

  @UiField InputElement searchField;

  @UiField Element groupInfo;

  @UiField UListElement contactList;

  public PhonebookView() {
    initWidget(BINDER.createAndBindUi(this));
  }

  @Override
  public void setGroupInfo(String text) {
    groupInfo.setInnerText(text);
  }

  @Override
  public void setContacts(List<Contact> contacts) {
    for (final Contact contact : contacts) {
      final Element element = DOM.createElement("li");
      element.setInnerSafeHtml(TEMPLATES.contactWithNote(contact.getName(), contact.getImageUrl(), contact.getNote()));
      contactList.appendChild(element);
    }
  }
}
