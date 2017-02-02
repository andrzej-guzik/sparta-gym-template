import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import Animations from "./modules/animations";

const navLinks = $("a.nav-link");
navLinks.smoothScroll({offset: 80});

const animations = new Animations();
