'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">keb-app documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-cf316a3187f3b91fba686a377332bcd3"' : 'data-target="#xs-components-links-module-AppModule-cf316a3187f3b91fba686a377332bcd3"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-cf316a3187f3b91fba686a377332bcd3"' : 'id="xs-components-links-module-AppModule-cf316a3187f3b91fba686a377332bcd3"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-cf316a3187f3b91fba686a377332bcd3"' : 'data-target="#xs-injectables-links-module-AppModule-cf316a3187f3b91fba686a377332bcd3"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-cf316a3187f3b91fba686a377332bcd3"' : 'id="xs-injectables-links-module-AppModule-cf316a3187f3b91fba686a377332bcd3"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ProductsService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/Calendar1Module.html" data-type="entity-link">Calendar1Module</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-Calendar1Module-e0ac671edff977b240658df1b8b5db9a"' : 'data-target="#xs-components-links-module-Calendar1Module-e0ac671edff977b240658df1b8b5db9a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-Calendar1Module-e0ac671edff977b240658df1b8b5db9a"' : 'id="xs-components-links-module-Calendar1Module-e0ac671edff977b240658df1b8b5db9a"' }>
                                        <li class="link">
                                            <a href="components/CalendarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CalendarDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarDetailComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CoreModule-b19e92b217540b5b5371554548cf047f"' : 'data-target="#xs-components-links-module-CoreModule-b19e92b217540b5b5371554548cf047f"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CoreModule-b19e92b217540b5b5371554548cf047f"' : 'id="xs-components-links-module-CoreModule-b19e92b217540b5b5371554548cf047f"' }>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ListusersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListusersComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CoreRoutingModule.html" data-type="entity-link">CoreRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/FournisseurModule.html" data-type="entity-link">FournisseurModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-FournisseurModule-61f7bfdcbf9e41e14c59d901c38902bb"' : 'data-target="#xs-components-links-module-FournisseurModule-61f7bfdcbf9e41e14c59d901c38902bb"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-FournisseurModule-61f7bfdcbf9e41e14c59d901c38902bb"' : 'id="xs-components-links-module-FournisseurModule-61f7bfdcbf9e41e14c59d901c38902bb"' }>
                                        <li class="link">
                                            <a href="components/FournisseurcomponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FournisseurcomponentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FournisseurdetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FournisseurdetailsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RestaurantmenuModule.html" data-type="entity-link">RestaurantmenuModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RestaurantmenuModule-409334cd8edaf747fc164b7263de4887"' : 'data-target="#xs-components-links-module-RestaurantmenuModule-409334cd8edaf747fc164b7263de4887"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RestaurantmenuModule-409334cd8edaf747fc164b7263de4887"' : 'id="xs-components-links-module-RestaurantmenuModule-409334cd8edaf747fc164b7263de4887"' }>
                                        <li class="link">
                                            <a href="components/RestaurantmenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RestaurantmenuComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-RestaurantmenuModule-409334cd8edaf747fc164b7263de4887"' : 'data-target="#xs-pipes-links-module-RestaurantmenuModule-409334cd8edaf747fc164b7263de4887"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-RestaurantmenuModule-409334cd8edaf747fc164b7263de4887"' : 'id="xs-pipes-links-module-RestaurantmenuModule-409334cd8edaf747fc164b7263de4887"' }>
                                        <li class="link">
                                            <a href="pipes/PricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PricePipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/StockModule.html" data-type="entity-link">StockModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-StockModule-daab6435e02ada6cbd77d10ba0046dae"' : 'data-target="#xs-components-links-module-StockModule-daab6435e02ada6cbd77d10ba0046dae"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-StockModule-daab6435e02ada6cbd77d10ba0046dae"' : 'id="xs-components-links-module-StockModule-daab6435e02ada6cbd77d10ba0046dae"' }>
                                        <li class="link">
                                            <a href="components/DetailStockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailStockComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StockComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/Fournisseur.html" data-type="entity-link">Fournisseur</a>
                    </li>
                    <li class="link">
                        <a href="classes/Menu.html" data-type="entity-link">Menu</a>
                    </li>
                    <li class="link">
                        <a href="classes/Product.html" data-type="entity-link">Product</a>
                    </li>
                    <li class="link">
                        <a href="classes/User.html" data-type="entity-link">User</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AuthGuardService.html" data-type="entity-link">AuthGuardService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CalendarDetailService.html" data-type="entity-link">CalendarDetailService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CalendarService.html" data-type="entity-link">CalendarService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FournisseurService.html" data-type="entity-link">FournisseurService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ListusersService.html" data-type="entity-link">ListusersService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ProductsService.html" data-type="entity-link">ProductsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RegisterService.html" data-type="entity-link">RegisterService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RestaurantmenuService.html" data-type="entity-link">RestaurantmenuService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/StockService.html" data-type="entity-link">StockService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/Reservation.html" data-type="entity-link">Reservation</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#pipes-links"' : 'data-target="#xs-pipes-links"' }>
                        <span class="icon ion-md-add"></span>
                        <span>Pipes</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                            <li class="link">
                                <a href="pipes/PipefilterPipe.html" data-type="entity-link">PipefilterPipe</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
