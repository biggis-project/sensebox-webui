System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "react": "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js",
    "react-dom": "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"
  },

  depCache: {
    "index.js": [
      "react",
      "react-dom",
      "components/CurrentLocationInfo"
    ],
    "npm:react-dom@15.4.2.js": [
      "npm:react-dom@15.4.2/index.js"
    ],
    "npm:react@15.4.2.js": [
      "npm:react@15.4.2/react.js"
    ],
    "components/CurrentLocationInfo.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "reactstrap"
    ],
    "npm:react-dom@15.4.2/index.js": [
      "./lib/ReactDOM"
    ],
    "npm:react@15.4.2/react.js": [
      "./lib/React"
    ],
    "npm:babel-runtime@5.8.38/helpers/get.js": [
      "../core-js/object/get-own-property-descriptor"
    ],
    "npm:babel-runtime@5.8.38/helpers/inherits.js": [
      "../core-js/object/create",
      "../core-js/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/helpers/create-class.js": [
      "../core-js/object/define-property"
    ],
    "npm:reactstrap@4.0.0-alpha.8.js": [
      "npm:reactstrap@4.0.0-alpha.8/lib/index.js"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js": [
      "core-js/library/fn/object/get-own-property-descriptor"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOM.js": [
      "./ReactDOMComponentTree",
      "./ReactDefaultInjection",
      "./ReactMount",
      "./ReactReconciler",
      "./ReactUpdates",
      "./ReactVersion",
      "./findDOMNode",
      "./getHostComponentFromComposite",
      "./renderSubtreeIntoContainer",
      "fbjs/lib/warning",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactInstrumentation",
      "./ReactDOMUnknownPropertyHook",
      "./ReactDOMNullInputValuePropHook",
      "./ReactDOMInvalidARIAHook",
      "process"
    ],
    "npm:react@15.4.2/lib/React.js": [
      "object-assign",
      "./ReactChildren",
      "./ReactComponent",
      "./ReactPureComponent",
      "./ReactClass",
      "./ReactDOMFactories",
      "./ReactElement",
      "./ReactPropTypes",
      "./ReactVersion",
      "./onlyChild",
      "fbjs/lib/warning",
      "./ReactElementValidator",
      "process"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/create.js": [
      "core-js/library/fn/object/create"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js": [
      "core-js/library/fn/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/define-property.js": [
      "core-js/library/fn/object/define-property"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/index.js": [
      "./Container",
      "./Row",
      "./Col",
      "./Navbar",
      "./NavbarBrand",
      "./NavbarToggler",
      "./Nav",
      "./NavItem",
      "./NavDropdown",
      "./NavLink",
      "./Breadcrumb",
      "./BreadcrumbItem",
      "./Button",
      "./ButtonDropdown",
      "./ButtonGroup",
      "./ButtonToolbar",
      "./Dropdown",
      "./DropdownItem",
      "./DropdownMenu",
      "./DropdownToggle",
      "./Fade",
      "./Badge",
      "./Card",
      "./CardGroup",
      "./CardDeck",
      "./CardColumns",
      "./CardBlock",
      "./CardLink",
      "./CardFooter",
      "./CardHeader",
      "./CardImg",
      "./CardImgOverlay",
      "./CardSubtitle",
      "./CardText",
      "./CardTitle",
      "./Popover",
      "./PopoverTitle",
      "./PopoverContent",
      "./Progress",
      "./Modal",
      "./ModalHeader",
      "./ModalBody",
      "./ModalFooter",
      "./TetherContent",
      "./Tooltip",
      "./Table",
      "./ListGroup",
      "./Form",
      "./FormFeedback",
      "./FormGroup",
      "./FormText",
      "./Input",
      "./InputGroup",
      "./InputGroupAddon",
      "./InputGroupButton",
      "./Label",
      "./Media",
      "./Pagination",
      "./PaginationItem",
      "./PaginationLink",
      "./TabContent",
      "./TabPane",
      "./Jumbotron",
      "./Alert",
      "./Collapse",
      "./ListGroupItem",
      "./ListGroupItemHeading",
      "./ListGroupItemText"
    ],
    "npm:object-assign@4.1.0.js": [
      "npm:object-assign@4.1.0/index"
    ],
    "npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js": [
      "../../modules/$",
      "../../modules/es6.object.get-own-property-descriptor"
    ],
    "npm:react-dom@15.4.2/lib/ReactDefaultInjection.js": [
      "./ARIADOMPropertyConfig",
      "./BeforeInputEventPlugin",
      "./ChangeEventPlugin",
      "./DefaultEventPluginOrder",
      "./EnterLeaveEventPlugin",
      "./HTMLDOMPropertyConfig",
      "./ReactComponentBrowserEnvironment",
      "./ReactDOMComponent",
      "./ReactDOMComponentTree",
      "./ReactDOMEmptyComponent",
      "./ReactDOMTreeTraversal",
      "./ReactDOMTextComponent",
      "./ReactDefaultBatchingStrategy",
      "./ReactEventListener",
      "./ReactInjection",
      "./ReactReconcileTransaction",
      "./SVGDOMPropertyConfig",
      "./SelectEventPlugin",
      "./SimpleEventPlugin"
    ],
    "npm:react-dom@15.4.2/lib/getHostComponentFromComposite.js": [
      "./ReactNodeTypes"
    ],
    "npm:react-dom@15.4.2/lib/renderSubtreeIntoContainer.js": [
      "./ReactMount"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:fbjs@0.8.8/lib/warning.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactInstrumentation.js": [
      "./ReactDebugTool",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactDOMFactories.js": [
      "./ReactElement",
      "./ReactElementValidator",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js": [
      "./reactProdInvariant",
      "./DOMProperty",
      "./ReactDOMComponentFlags",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactReconciler.js": [
      "./ReactRef",
      "./ReactInstrumentation",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactUpdates.js": [
      "./reactProdInvariant",
      "object-assign",
      "./CallbackQueue",
      "./PooledClass",
      "./ReactFeatureFlags",
      "./ReactReconciler",
      "./Transaction",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/findDOMNode.js": [
      "./reactProdInvariant",
      "react/lib/ReactCurrentOwner",
      "./ReactDOMComponentTree",
      "./ReactInstanceMap",
      "./getHostComponentFromComposite",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMUnknownPropertyHook.js": [
      "./DOMProperty",
      "./EventPluginRegistry",
      "react/lib/ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMNullInputValuePropHook.js": [
      "react/lib/ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMInvalidARIAHook.js": [
      "./DOMProperty",
      "react/lib/ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactChildren.js": [
      "./PooledClass",
      "./ReactElement",
      "fbjs/lib/emptyFunction",
      "./traverseAllChildren"
    ],
    "npm:react@15.4.2/lib/ReactPureComponent.js": [
      "object-assign",
      "./ReactComponent",
      "./ReactNoopUpdateQueue",
      "fbjs/lib/emptyObject"
    ],
    "npm:react@15.4.2/lib/ReactComponent.js": [
      "./reactProdInvariant",
      "./ReactNoopUpdateQueue",
      "./canDefineProperty",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactClass.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactComponent",
      "./ReactElement",
      "./ReactPropTypeLocationNames",
      "./ReactNoopUpdateQueue",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactElement.js": [
      "object-assign",
      "./ReactCurrentOwner",
      "fbjs/lib/warning",
      "./canDefineProperty",
      "./ReactElementSymbol",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactPropTypes.js": [
      "./ReactElement",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/emptyFunction",
      "./getIteratorFn",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/onlyChild.js": [
      "./reactProdInvariant",
      "./ReactElement",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactElementValidator.js": [
      "./ReactCurrentOwner",
      "./ReactComponentTreeHook",
      "./ReactElement",
      "./checkReactTypeSpec",
      "./canDefineProperty",
      "./getIteratorFn",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactMount.js": [
      "./reactProdInvariant",
      "./DOMLazyTree",
      "./DOMProperty",
      "react/lib/React",
      "./ReactBrowserEventEmitter",
      "react/lib/ReactCurrentOwner",
      "./ReactDOMComponentTree",
      "./ReactDOMContainerInfo",
      "./ReactDOMFeatureFlags",
      "./ReactFeatureFlags",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactMarkupChecksum",
      "./ReactReconciler",
      "./ReactUpdateQueue",
      "./ReactUpdates",
      "fbjs/lib/emptyObject",
      "./instantiateReactComponent",
      "fbjs/lib/invariant",
      "./setInnerHTML",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:core-js@1.2.7/library/fn/object/define-property.js": [
      "../../modules/$"
    ],
    "npm:core-js@1.2.7/library/fn/object/create.js": [
      "../../modules/$"
    ],
    "npm:core-js@1.2.7/library/fn/object/set-prototype-of.js": [
      "../../modules/es6.object.set-prototype-of",
      "../../modules/$.core"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Container.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Row.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Col.js": [
      "lodash.isobject",
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Navbar.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/NavbarBrand.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/NavbarToggler.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Nav.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/NavDropdown.js": [
      "react",
      "classnames",
      "./utils",
      "./Dropdown"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/NavItem.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/NavLink.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Breadcrumb.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Button.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/BreadcrumbItem.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/ButtonDropdown.js": [
      "react",
      "./Dropdown"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/ButtonGroup.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Dropdown.js": [
      "react",
      "react-dom",
      "classnames",
      "lodash.omit",
      "./utils",
      "./TetherContent",
      "./DropdownMenu"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/ButtonToolbar.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/DropdownItem.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/DropdownMenu.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/DropdownToggle.js": [
      "react",
      "classnames",
      "./utils",
      "./Button"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Fade.js": [
      "react",
      "classnames",
      "lodash.omit",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/CardDeck.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Card.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Badge.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/CardColumns.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/CardLink.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/CardBlock.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/CardHeader.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/CardFooter.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/CardImgOverlay.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/CardImg.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/CardSubtitle.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/CardTitle.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/CardText.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Popover.js": [
      "react",
      "classnames",
      "lodash.omit",
      "./TetherContent",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/PopoverTitle.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/PopoverContent.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Progress.js": [
      "react",
      "classnames",
      "lodash.tonumber",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/ModalBody.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/ModalHeader.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/ModalFooter.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/TetherContent.js": [
      "react",
      "react-dom",
      "lodash.isfunction",
      "tether"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Table.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Tooltip.js": [
      "react",
      "classnames",
      "lodash.omit",
      "./TetherContent",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/ListGroup.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Form.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Modal.js": [
      "react",
      "react-dom",
      "classnames",
      "lodash.omit",
      "react-addons-transition-group",
      "./Fade",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/FormFeedback.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/FormGroup.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/FormText.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Input.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/InputGroupAddon.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/InputGroup.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/InputGroupButton.js": [
      "react",
      "classnames",
      "./utils",
      "./Button"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Media.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/PaginationItem.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Pagination.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/PaginationLink.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/TabContent.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/TabPane.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Jumbotron.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Label.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Collapse.js": [
      "react",
      "classnames",
      "lodash.omit",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/Alert.js": [
      "react",
      "classnames",
      "react-addons-css-transition-group",
      "./utils"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/ListGroupItem.js": [
      "react",
      "classnames"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/ListGroupItemHeading.js": [
      "react",
      "classnames"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/ListGroupItemText.js": [
      "react",
      "classnames"
    ],
    "npm:reactstrap@4.0.0-alpha.8/lib/CardGroup.js": [
      "react",
      "classnames",
      "./utils"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js": [
      "./$.to-iobject",
      "./$.object-sap"
    ],
    "npm:react-dom@15.4.2/lib/EnterLeaveEventPlugin.js": [
      "./EventPropagators",
      "./ReactDOMComponentTree",
      "./SyntheticMouseEvent"
    ],
    "npm:react-dom@15.4.2/lib/HTMLDOMPropertyConfig.js": [
      "./DOMProperty"
    ],
    "npm:react-dom@15.4.2/lib/ReactInjection.js": [
      "./DOMProperty",
      "./EventPluginHub",
      "./EventPluginUtils",
      "./ReactComponentEnvironment",
      "./ReactEmptyComponent",
      "./ReactBrowserEventEmitter",
      "./ReactHostComponent",
      "./ReactUpdates"
    ],
    "npm:react-dom@15.4.2/lib/DOMLazyTree.js": [
      "./DOMNamespaces",
      "./setInnerHTML",
      "./createMicrosoftUnsafeLocalFunction",
      "./setTextContent"
    ],
    "npm:react-dom@15.4.2/lib/ReactMarkupChecksum.js": [
      "./adler32"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMEmptyComponent.js": [
      "object-assign",
      "./DOMLazyTree",
      "./ReactDOMComponentTree"
    ],
    "npm:react-dom@15.4.2/lib/ReactComponentBrowserEnvironment.js": [
      "./DOMChildrenOperations",
      "./ReactDOMIDOperations",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactReconcileTransaction.js": [
      "object-assign",
      "./CallbackQueue",
      "./PooledClass",
      "./ReactBrowserEventEmitter",
      "./ReactInputSelection",
      "./ReactInstrumentation",
      "./Transaction",
      "./ReactUpdateQueue",
      "process"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:fbjs@0.8.8/lib/invariant.js": [
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactRef.js": [
      "./ReactOwner",
      "process"
    ],
    "npm:fbjs@0.8.8/lib/emptyObject.js": [
      "process"
    ],
    "npm:react@15.4.2/lib/canDefineProperty.js": [
      "process"
    ],
    "npm:react@15.4.2/lib/ReactPropTypeLocationNames.js": [
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactBrowserEventEmitter.js": [
      "object-assign",
      "./EventPluginRegistry",
      "./ReactEventEmitterMixin",
      "./ViewportMetrics",
      "./getVendorPrefixedEventName",
      "./isEventSupported",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMContainerInfo.js": [
      "./validateDOMNesting",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ChangeEventPlugin.js": [
      "./EventPluginHub",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "./SyntheticEvent",
      "./getEventTarget",
      "./isEventSupported",
      "./isTextInputElement",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/BeforeInputEventPlugin.js": [
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./FallbackCompositionState",
      "./SyntheticCompositionEvent",
      "./SyntheticInputEvent"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./AutoFocusUtils",
      "./CSSPropertyOperations",
      "./DOMLazyTree",
      "./DOMNamespaces",
      "./DOMProperty",
      "./DOMPropertyOperations",
      "./EventPluginHub",
      "./EventPluginRegistry",
      "./ReactBrowserEventEmitter",
      "./ReactDOMComponentFlags",
      "./ReactDOMComponentTree",
      "./ReactDOMInput",
      "./ReactDOMOption",
      "./ReactDOMSelect",
      "./ReactDOMTextarea",
      "./ReactInstrumentation",
      "./ReactMultiChild",
      "./ReactServerRenderingTransaction",
      "fbjs/lib/emptyFunction",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./isEventSupported",
      "fbjs/lib/shallowEqual",
      "./validateDOMNesting",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMTreeTraversal.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMTextComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./DOMChildrenOperations",
      "./DOMLazyTree",
      "./ReactDOMComponentTree",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./validateDOMNesting",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDefaultBatchingStrategy.js": [
      "object-assign",
      "./ReactUpdates",
      "./Transaction",
      "fbjs/lib/emptyFunction"
    ],
    "npm:react-dom@15.4.2/lib/ReactEventListener.js": [
      "object-assign",
      "fbjs/lib/EventListener",
      "fbjs/lib/ExecutionEnvironment",
      "./PooledClass",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "./getEventTarget",
      "fbjs/lib/getUnboundedScrollPosition",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/SelectEventPlugin.js": [
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactDOMComponentTree",
      "./ReactInputSelection",
      "./SyntheticEvent",
      "fbjs/lib/getActiveElement",
      "./isTextInputElement",
      "fbjs/lib/shallowEqual"
    ],
    "npm:react-dom@15.4.2/lib/SimpleEventPlugin.js": [
      "./reactProdInvariant",
      "fbjs/lib/EventListener",
      "./EventPropagators",
      "./ReactDOMComponentTree",
      "./SyntheticAnimationEvent",
      "./SyntheticClipboardEvent",
      "./SyntheticEvent",
      "./SyntheticFocusEvent",
      "./SyntheticKeyboardEvent",
      "./SyntheticMouseEvent",
      "./SyntheticDragEvent",
      "./SyntheticTouchEvent",
      "./SyntheticTransitionEvent",
      "./SyntheticUIEvent",
      "./SyntheticWheelEvent",
      "fbjs/lib/emptyFunction",
      "./getEventCharCode",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactNodeTypes.js": [
      "./reactProdInvariant",
      "react/lib/React",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDebugTool.js": [
      "./ReactInvalidSetStateWarningHook",
      "./ReactHostOperationHistoryHook",
      "react/lib/ReactComponentTreeHook",
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/performanceNow",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/DOMProperty.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/CallbackQueue.js": [
      "./reactProdInvariant",
      "./PooledClass",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/PooledClass.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/Transaction.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/EventPluginRegistry.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactComponentTreeHook.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/PooledClass.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.4.2/lib/traverseAllChildren.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "./ReactElementSymbol",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "./KeyEscapeUtils",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactNoopUpdateQueue.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/checkReactTypeSpec.js": [
      "./reactProdInvariant",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "./ReactComponentTreeHook",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactUpdateQueue.js": [
      "./reactProdInvariant",
      "react/lib/ReactCurrentOwner",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/instantiateReactComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactCompositeComponent",
      "./ReactEmptyComponent",
      "./ReactHostComponent",
      "./getNextDebugID",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/setInnerHTML.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./DOMNamespaces",
      "./createMicrosoftUnsafeLocalFunction",
      "process"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js": [
      "./$.export",
      "./$.set-proto"
    ],
    "npm:classnames@2.2.5.js": [
      "npm:classnames@2.2.5/index.js"
    ],
    "npm:lodash.isobject@3.0.2.js": [
      "npm:lodash.isobject@3.0.2/index"
    ],
    "npm:lodash.isfunction@3.0.8.js": [
      "npm:lodash.isfunction@3.0.8/index"
    ],
    "npm:lodash.omit@4.5.0.js": [
      "npm:lodash.omit@4.5.0/index"
    ],
    "npm:lodash.tonumber@4.0.3.js": [
      "npm:lodash.tonumber@4.0.3/index"
    ],
    "npm:tether@1.4.0.js": [
      "npm:tether@1.4.0/dist/js/tether.js"
    ],
    "npm:react-addons-transition-group@15.4.2.js": [
      "npm:react-addons-transition-group@15.4.2/index.js"
    ],
    "npm:react-addons-css-transition-group@15.4.2.js": [
      "npm:react-addons-css-transition-group@15.4.2/index.js"
    ],
    "npm:core-js@1.2.7/library/modules/$.object-sap.js": [
      "./$.export",
      "./$.core",
      "./$.fails"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticMouseEvent.js": [
      "./SyntheticUIEvent",
      "./ViewportMetrics",
      "./getEventModifierState"
    ],
    "npm:core-js@1.2.7/library/modules/$.to-iobject.js": [
      "./$.iobject",
      "./$.defined"
    ],
    "npm:process@0.11.9.js": [
      "npm:process@0.11.9/browser.js"
    ],
    "npm:react-dom@15.4.2/lib/ReactEventEmitterMixin.js": [
      "./EventPluginHub"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticCompositionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticInputEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticAnimationEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticClipboardEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticFocusEvent.js": [
      "./SyntheticUIEvent"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticKeyboardEvent.js": [
      "./SyntheticUIEvent",
      "./getEventCharCode",
      "./getEventKey",
      "./getEventModifierState"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticDragEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticTouchEvent.js": [
      "./SyntheticUIEvent",
      "./getEventModifierState"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticTransitionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticUIEvent.js": [
      "./SyntheticEvent",
      "./getEventTarget"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticWheelEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:fbjs@0.8.8/lib/performanceNow.js": [
      "./performance"
    ],
    "npm:react-dom@15.4.2/lib/FallbackCompositionState.js": [
      "object-assign",
      "./PooledClass",
      "./getTextContentAccessor"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMIDOperations.js": [
      "./DOMChildrenOperations",
      "./ReactDOMComponentTree",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/DOMChildrenOperations.js": [
      "./DOMLazyTree",
      "./Danger",
      "./ReactDOMComponentTree",
      "./ReactInstrumentation",
      "./createMicrosoftUnsafeLocalFunction",
      "./setInnerHTML",
      "./setTextContent",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactServerRenderingTransaction.js": [
      "object-assign",
      "./PooledClass",
      "./Transaction",
      "./ReactInstrumentation",
      "./ReactServerUpdateQueue",
      "process"
    ],
    "npm:fbjs@0.8.8/lib/EventListener.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/EventPropagators.js": [
      "./EventPluginHub",
      "./EventPluginUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/EventPluginHub.js": [
      "./reactProdInvariant",
      "./EventPluginRegistry",
      "./EventPluginUtils",
      "./ReactErrorUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/EventPluginUtils.js": [
      "./reactProdInvariant",
      "./ReactErrorUtils",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactComponentEnvironment.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactHostComponent.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/setTextContent.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./escapeTextContentForBrowser",
      "./setInnerHTML"
    ],
    "npm:react-dom@15.4.2/lib/ReactInputSelection.js": [
      "./ReactDOMSelection",
      "fbjs/lib/containsNode",
      "fbjs/lib/focusNode",
      "fbjs/lib/getActiveElement"
    ],
    "npm:react-dom@15.4.2/lib/ReactOwner.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/getVendorPrefixedEventName.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react-dom@15.4.2/lib/isEventSupported.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react-dom@15.4.2/lib/validateDOMNesting.js": [
      "object-assign",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/SyntheticEvent.js": [
      "object-assign",
      "./PooledClass",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/AutoFocusUtils.js": [
      "./ReactDOMComponentTree",
      "fbjs/lib/focusNode"
    ],
    "npm:react-dom@15.4.2/lib/CSSPropertyOperations.js": [
      "./CSSProperty",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactInstrumentation",
      "fbjs/lib/camelizeStyleName",
      "./dangerousStyleValue",
      "fbjs/lib/hyphenateStyleName",
      "fbjs/lib/memoizeStringOnly",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/DOMPropertyOperations.js": [
      "./DOMProperty",
      "./ReactDOMComponentTree",
      "./ReactInstrumentation",
      "./quoteAttributeValueForBrowser",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMInput.js": [
      "./reactProdInvariant",
      "object-assign",
      "./DOMPropertyOperations",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMOption.js": [
      "object-assign",
      "react/lib/React",
      "./ReactDOMComponentTree",
      "./ReactDOMSelect",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMSelect.js": [
      "object-assign",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMTextarea.js": [
      "./reactProdInvariant",
      "object-assign",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactMultiChild.js": [
      "./reactProdInvariant",
      "./ReactComponentEnvironment",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "react/lib/ReactCurrentOwner",
      "./ReactReconciler",
      "./ReactChildReconciler",
      "fbjs/lib/emptyFunction",
      "./flattenChildren",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactInvalidSetStateWarningHook.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactCompositeComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "react/lib/React",
      "./ReactComponentEnvironment",
      "react/lib/ReactCurrentOwner",
      "./ReactErrorUtils",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactNodeTypes",
      "./ReactReconciler",
      "./checkReactTypeSpec",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/shallowEqual",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:core-js@1.2.7/library/modules/$.export.js": [
      "./$.global",
      "./$.core",
      "./$.ctx"
    ],
    "npm:core-js@1.2.7/library/modules/$.set-proto.js": [
      "./$",
      "./$.is-object",
      "./$.an-object",
      "./$.ctx"
    ],
    "npm:lodash.omit@4.5.0/index.js": [
      "process"
    ],
    "npm:lodash.tonumber@4.0.3/index.js": [
      "process"
    ],
    "npm:react-addons-transition-group@15.4.2/index.js": [
      "react/lib/ReactTransitionGroup"
    ],
    "npm:react-addons-css-transition-group@15.4.2/index.js": [
      "react/lib/ReactCSSTransitionGroup"
    ],
    "npm:core-js@1.2.7/library/modules/$.iobject.js": [
      "./$.cof"
    ],
    "npm:react-dom@15.4.2/lib/getEventKey.js": [
      "./getEventCharCode"
    ],
    "npm:fbjs@0.8.8/lib/performance.js": [
      "./ExecutionEnvironment"
    ],
    "npm:fbjs@0.8.8/lib/containsNode.js": [
      "./isTextNode"
    ],
    "npm:fbjs@0.8.8/lib/camelizeStyleName.js": [
      "./camelize"
    ],
    "npm:fbjs@0.8.8/lib/hyphenateStyleName.js": [
      "./hyphenate"
    ],
    "npm:react-dom@15.4.2/lib/quoteAttributeValueForBrowser.js": [
      "./escapeTextContentForBrowser"
    ],
    "npm:react-dom@15.4.2/lib/ReactErrorUtils.js": [
      "process"
    ],
    "npm:react-dom@15.4.2/lib/getTextContentAccessor.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react-dom@15.4.2/lib/Danger.js": [
      "./reactProdInvariant",
      "./DOMLazyTree",
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/createNodesFromMarkup",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactServerUpdateQueue.js": [
      "./ReactUpdateQueue",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/accumulateInto.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactDOMSelection.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./getNodeForCharacterOffset",
      "./getTextContentAccessor"
    ],
    "npm:react-dom@15.4.2/lib/dangerousStyleValue.js": [
      "./CSSProperty",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactChildReconciler.js": [
      "./ReactReconciler",
      "./instantiateReactComponent",
      "./KeyEscapeUtils",
      "./shouldUpdateReactComponent",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "react/lib/ReactComponentTreeHook",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/LinkedValueUtils.js": [
      "./reactProdInvariant",
      "react/lib/React",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/flattenChildren.js": [
      "./KeyEscapeUtils",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "react/lib/ReactComponentTreeHook",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/checkReactTypeSpec.js": [
      "./reactProdInvariant",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "react/lib/ReactComponentTreeHook",
      "process"
    ],
    "npm:core-js@1.2.7/library/modules/$.ctx.js": [
      "./$.a-function"
    ],
    "npm:core-js@1.2.7/library/modules/$.an-object.js": [
      "./$.is-object"
    ],
    "npm:react@15.4.2/lib/ReactTransitionGroup.js": [
      "object-assign",
      "./React",
      "./ReactTransitionChildMapping",
      "fbjs/lib/emptyFunction"
    ],
    "npm:react@15.4.2/lib/ReactCSSTransitionGroup.js": [
      "object-assign",
      "./React",
      "./ReactTransitionGroup",
      "./ReactCSSTransitionGroupChild"
    ],
    "npm:fbjs@0.8.8/lib/isTextNode.js": [
      "./isNode"
    ],
    "npm:fbjs@0.8.8/lib/createNodesFromMarkup.js": [
      "./ExecutionEnvironment",
      "./createArrayFromMixed",
      "./getMarkupWrap",
      "./invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/traverseAllChildren.js": [
      "./reactProdInvariant",
      "react/lib/ReactCurrentOwner",
      "./ReactElementSymbol",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "./KeyEscapeUtils",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactPropTypeLocationNames.js": [
      "process"
    ],
    "npm:react@15.4.2/lib/ReactTransitionChildMapping.js": [
      "./flattenChildren",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactCSSTransitionGroupChild.js": [
      "./React",
      "./ReactAddonsDOMDependencies",
      "fbjs/lib/CSSCore",
      "./ReactTransitionEvents",
      "./onlyChild"
    ],
    "npm:fbjs@0.8.8/lib/getMarkupWrap.js": [
      "./ExecutionEnvironment",
      "./invariant",
      "process"
    ],
    "npm:fbjs@0.8.8/lib/createArrayFromMixed.js": [
      "./invariant",
      "process"
    ],
    "npm:react@15.4.2/lib/flattenChildren.js": [
      "./KeyEscapeUtils",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "./ReactComponentTreeHook",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactAddonsDOMDependencies.js": [
      "react-dom/lib/ReactDOM",
      "react-dom/lib/ReactPerf",
      "react-dom/lib/ReactTestUtils",
      "process"
    ],
    "npm:fbjs@0.8.8/lib/CSSCore.js": [
      "./invariant",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactTransitionEvents.js": [
      "fbjs/lib/ExecutionEnvironment",
      "react-dom/lib/getVendorPrefixedEventName"
    ],
    "npm:react-dom@15.4.2/lib/ReactPerf.js": [
      "object-assign",
      "./ReactDebugTool",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactTestUtils.js": [
      "./reactProdInvariant",
      "object-assign",
      "./EventConstants",
      "./EventPluginHub",
      "./EventPluginRegistry",
      "./EventPropagators",
      "react/lib/React",
      "./ReactDOM",
      "./ReactDOMComponentTree",
      "./ReactBrowserEventEmitter",
      "./ReactInstanceMap",
      "./ReactUpdates",
      "./SyntheticEvent",
      "./ReactShallowRenderer",
      "./findDOMNode",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.4.2/lib/ReactShallowRenderer.js": [
      "./reactProdInvariant",
      "object-assign",
      "react/lib/React",
      "./ReactDefaultInjection",
      "./ReactCompositeComponent",
      "./ReactReconciler",
      "./ReactUpdates",
      "fbjs/lib/emptyObject",
      "./getNextDebugID",
      "fbjs/lib/invariant",
      "process"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "react": "npm:react@15.4.2",
    "react-dom": "npm:react-dom@15.4.2",
    "reactstrap": "npm:reactstrap@4.0.0-alpha.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:asap@2.0.5": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.2.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.15"
    },
    "npm:fbjs@0.8.8": {
      "core-js": "npm:core-js@1.2.7",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "setimmediate": "npm:setimmediate@1.0.5",
      "ua-parser-js": "npm:ua-parser-js@0.7.12"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.15": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.3",
      "whatwg-fetch": "npm:whatwg-fetch@2.0.1"
    },
    "npm:lodash.omit@4.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.tonumber@4.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:node-fetch@1.6.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-addons-css-transition-group@15.4.2": {
      "fbjs": "npm:fbjs@0.8.8",
      "object-assign": "npm:object-assign@4.1.0",
      "react": "npm:react@15.4.2"
    },
    "npm:react-addons-transition-group@15.4.2": {
      "fbjs": "npm:fbjs@0.8.8",
      "object-assign": "npm:object-assign@4.1.0",
      "react": "npm:react@15.4.2"
    },
    "npm:react-dom@15.4.2": {
      "fbjs": "npm:fbjs@0.8.8",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.2"
    },
    "npm:react@15.4.2": {
      "fbjs": "npm:fbjs@0.8.8",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:reactstrap@4.0.0-alpha.8": {
      "classnames": "npm:classnames@2.2.5",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.8",
      "lodash.isobject": "npm:lodash.isobject@3.0.2",
      "lodash.omit": "npm:lodash.omit@4.5.0",
      "lodash.tonumber": "npm:lodash.tonumber@4.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.2",
      "react-addons-css-transition-group": "npm:react-addons-css-transition-group@15.4.2",
      "react-addons-transition-group": "npm:react-addons-transition-group@15.4.2",
      "react-dom": "npm:react-dom@15.4.2",
      "tether": "npm:tether@1.4.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.2.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:setimmediate@1.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:tether@1.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:ua-parser-js@0.7.12": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
