import $ from "jquery";
import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints";

class Animations {
    constructor() {
        this.animateItems = $(".animate");
        this.setItems();
        this.createWaypoints();
    }

    setItems() {
        this.animateItems.addClass("animate-item");
    }

    createWaypoints() {
        this.animateItems.each(function() {
            let currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("animate-item--is-animated");
                },
                offset: "75%"
            });
        });
    }
}

export default Animations;
