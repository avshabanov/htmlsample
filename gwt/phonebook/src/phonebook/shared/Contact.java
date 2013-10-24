package phonebook.shared;

import java.io.Serializable;

public final class Contact implements Serializable {
  private static final long serialVersionUID = 1L;

  private String name;
  private String imageUrl;
  private String note;

  public Contact(String name, String imageUrl, String note) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.note = note;
  }

  // for serializable means
  public Contact() {
  }

  public String getName() {
    return name;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public String getNote() {
    return note;
  }
}
