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
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-49f250eb1737f7f333ad0e11db55a1f5"' : 'data-target="#xs-components-links-module-AppModule-49f250eb1737f7f333ad0e11db55a1f5"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-49f250eb1737f7f333ad0e11db55a1f5"' : 'id="xs-components-links-module-AppModule-49f250eb1737f7f333ad0e11db55a1f5"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-49f250eb1737f7f333ad0e11db55a1f5"' : 'data-target="#xs-injectables-links-module-AppModule-49f250eb1737f7f333ad0e11db55a1f5"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-49f250eb1737f7f333ad0e11db55a1f5"' : 'id="xs-injectables-links-module-AppModule-49f250eb1737f7f333ad0e11db55a1f5"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ProductsService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CalendarModule.html" data-type="entity-link">CalendarModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CalendarModule-4b77b53c4e6977de1697cc28c6073991"' : 'data-target="#xs-components-links-module-CalendarModule-4b77b53c4e6977de1697cc28c6073991"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CalendarModule-4b77b53c4e6977de1697cc28c6073991"' : 'id="xs-components-links-module-CalendarModule-4b77b53c4e6977de1697cc28c6073991"' }>
                                        <li class="link">
                                            <a href="components/CalendarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CalendarDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarDetailComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-CalendarModule-4b77b53c4e6977de1697cc28c6073991"' : 'data-target="#xs-injectables-links-module-CalendarModule-4b77b53c4e6977de1697cc28c6073991"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-CalendarModule-4b77b53c4e6977de1697cc28c6073991"' : 'id="xs-injectables-links-module-CalendarModule-4b77b53c4e6977de1697cc28c6073991"' }>
                                        <li class="link">
                                            <a href="injectables/CalendarService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>CalendarService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CalendarRoutingModule.html" data-type="entity-link">CalendarRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CoreModule-9f0a0e0aab63b1555c5ea250f094947d"' : 'data-target="#xs-components-links-module-CoreModule-9f0a0e0aab63b1555c5ea250f094947d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CoreModule-9f0a0e0aab63b1555c5ea250f094947d"' : 'id="xs-components-links-module-CoreModule-9f0a0e0aab63b1555c5ea250f094947d"' }>
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
                                    ${ isNormalMode ? 'data-target="#components-links-module-FournisseurModule-66eb11f4748295b8a8e1fa6256eacebd"' : 'data-target="#xs-components-links-module-FournisseurModule-66eb11f4748295b8a8e1fa6256eacebd"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-FournisseurModule-66eb11f4748295b8a8e1fa6256eacebd"' : 'id="xs-components-links-module-FournisseurModule-66eb11f4748295b8a8e1fa6256eacebd"' }>
                                        <li class="link">
                                            <a href="components/FournisseurcomponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FournisseurcomponentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FournisseurdetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FournisseurdetailsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RoutfournisseurComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoutfournisseurComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-FournisseurModule-66eb11f4748295b8a8e1fa6256eacebd"' : 'data-target="#xs-injectables-links-module-FournisseurModule-66eb11f4748295b8a8e1fa6256eacebd"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-FournisseurModule-66eb11f4748295b8a8e1fa6256eacebd"' : 'id="xs-injectables-links-module-FournisseurModule-66eb11f4748295b8a8e1fa6256eacebd"' }>
                                        <li class="link">
                                            <a href="injectables/FournisseurService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FournisseurService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RestaurantmenuModule.html" data-type="entity-link">RestaurantmenuModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RestaurantmenuModule-25955283bdd16d4b3cf77f4ebbc71458"' : 'data-target="#xs-components-links-module-RestaurantmenuModule-25955283bdd16d4b3cf77f4ebbc71458"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RestaurantmenuModule-25955283bdd16d4b3cf77f4ebbc71458"' : 'id="xs-components-links-module-RestaurantmenuModule-25955283bdd16d4b3cf77f4ebbc71458"' }>
                                        <li class="link">
                                            <a href="components/AddmenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddmenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RestaurantmenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RestaurantmenuComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-RestaurantmenuModule-25955283bdd16d4b3cf77f4ebbc71458"' : 'data-target="#xs-pipes-links-module-RestaurantmenuModule-25955283bdd16d4b3cf77f4ebbc71458"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-RestaurantmenuModule-25955283bdd16d4b3cf77f4ebbc71458"' : 'id="xs-pipes-links-module-RestaurantmenuModule-25955283bdd16d4b3cf77f4ebbc71458"' }>
                                        <li class="link">
                                            <a href="pipes/PricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PricePipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RoutingModule.html" data-type="entity-link">RoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/StockModule.html" data-type="entity-link">StockModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-StockModule-36e72d3f8eeeb3b1fc561f5ae87c7d05"' : 'data-target="#xs-components-links-module-StockModule-36e72d3f8eeeb3b1fc561f5ae87c7d05"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-StockModule-36e72d3f8eeeb3b1fc561f5ae87c7d05"' : 'id="xs-components-links-module-StockModule-36e72d3f8eeeb3b1fc561f5ae87c7d05"' }>
                                        <li class="link">
                                            <a href="components/AddProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddProductComponent</a>
                                        </li>
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
                        <a href="modules/StockRoutingModule.html" data-type="entity-link">StockRoutingModule</a>
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
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AuthGuardService.html" data-type="entity-link">AuthGuardService</a>
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
