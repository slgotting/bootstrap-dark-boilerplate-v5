// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
import "/static/bootstrap/node_modules/@popperjs/core/dist/umd/popper.min.js";

// Import the required DOM management plugins first
import "/static/bootstrap/node_modules/bootstrap/js/dist/dom/data.js";
import "/static/bootstrap/node_modules/bootstrap/js/dist/dom/event-handler.js";
import "/static/bootstrap/node_modules/bootstrap/js/dist/dom/manipulator.js";
import "/static/bootstrap/node_modules/bootstrap/js/dist/dom/selector-engine.js";
import "/static/bootstrap/node_modules/bootstrap/js/dist/base-component.js";

// Then your specific components
import "/static/bootstrap/node_modules/bootstrap/js/dist/dropdown.js";
import "/static/bootstrap/node_modules/bootstrap/js/dist/offcanvas.js";
import "/static/bootstrap/node_modules/bootstrap/js/dist/toast.js";
import "/static/bootstrap/node_modules/bootstrap/js/dist/modal.js";
