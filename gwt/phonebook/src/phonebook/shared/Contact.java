package phonebook.shared;

import java.io.Serializable;

public final class Contact implements Serializable {
  private static final long serialVersionUID = 1L;

  private String name;
  private String phone;
  private String imageUrl;
  private String note;

  public Contact(String name, String phone, String imageUrl, String note) {
    this.name = name;
    this.phone = phone;
    this.imageUrl = imageUrl;
    this.note = note;
  }

  // for serializable means
  public Contact() {
  }

  public String getName() {
    return name;
  }

  public String getPhone() {
    return phone;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public String getNote() {
    return note;
  }
}
