package progressive.website.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/g")
public final class PublicPageController {

  @RequestMapping("/index")
  public String index() {
    return "page/index";
  }
}
