package hi.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;

public class HiApp implements EntryPoint {

    @Override
    public void onModuleLoad() {
        final Label text = new Label("Hi!");
        RootPanel.get("hiContainer").add(text);
    }
}

