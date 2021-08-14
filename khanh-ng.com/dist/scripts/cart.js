/*<![CDATA[*/
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'miramacho.myshopify.com',
            storefrontAccessToken: 'b64101d184997f74575d4c5b646add60',
        });
        ///////// TOTEBAG ////////////
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '6814337728697',
                node: document.getElementById('product-component-1625251095083'),
                moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                options: {
                    "product": {
                        iframe: !1,
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            button: {
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#b0b0b0"
                                },
                                "background-color": "#c4c4c4",
                                ":focus": {
                                    "background-color": "#b0b0b0"
                                },
                                "border-radius": "26px",
                                "padding-left": "23px",
                                "padding-right": "23px"
                            }
                        },
                        "contents": {
                            "img": false,
                            "title": false,
                            "price": false
                        },
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            }
                        },
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "option": {},
                    "cart": {
                        styles: {
                            button: {
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#b0b0b0"
                                },
                                "background-color": "#ffcaca",
                                ":focus": {
                                    "background-color": "#b0b0b0"
                                },
                                "border-radius": "26px"
                            },
                            title: {
                                color: "#ffffff"
                            },
                            header: {
                                color: "#ffffff"
                            },
                            lineItems: {
                                color: "#ffffff"
                            },
                            subtotalText: {
                                color: "#ffffff"
                            },
                            subtotal: {
                                color: "#ffffff"
                            },
                            notice: {
                                color: "#ffffff"
                            },
                            currency: {
                                color: "#ffffff"
                            },
                            close: {
                                color: "#ffffff",
                                ":hover": {
                                    color: "#ffffff"
                                }
                            },
                            empty: {
                                color: "#ffffff"
                            },
                            noteDescription: {
                                color: "#ffffff"
                            },
                            discountText: {
                                color: "#ffffff"
                            },
                            discountIcon: {
                                fill: "#ffffff"
                            },
                            discountAmount: {
                                color: "#ffffff"
                            },
                            cart: {
                                "background-color": "#0a0a0a"
                            },
                            footer: {
                                "background-color": "#0a0a0a"
                            }
                        },
                        iframe: !1,
                        "text": {
                            title: "Bag",
                            total: "Subtotal",
                            button: "Checkout"
                        },
                        "popup": false
                    },
                    toggle: {
                        iframe: !1,
                        contents: {
                            count: !0,
                            icon: !1,
                            title: !0
                        },
                        text: {
                            title: "Bag"
                        },
                        styles: {
                            toggle: {
                                "font-weight": "bold",
                                "background-color": "#c4c4c4",
                                ":hover": {
                                    "background-color": "#b0b0b0"
                                },
                                ":focus": {
                                    "background-color": "#b0b0b0"
                                }
                            }
                        }
                    },
                },
            });
        });
        
        ///////// MUG ////////////
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '6814371217593',
                node: document.getElementById('product-component-1625251565582'),
                moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                options: {
                    "product": {
                        iframe: !1,
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            button: {
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#b0b0b0"
                                },
                                "background-color": "#c4c4c4",
                                ":focus": {
                                    "background-color": "#b0b0b0"
                                },
                                "border-radius": "26px",
                                "padding-left": "23px",
                                "padding-right": "23px"
                            }
                        },
                        "contents": {
                            "img": false,
                            "title": false,
                            "price": false
                        },
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            }
                        },
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "option": {},
                    "cart": {
                        styles: {
                            button: {
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#b0b0b0"
                                },
                                "background-color": "#ffcaca",
                                ":focus": {
                                    "background-color": "#b0b0b0"
                                },
                                "border-radius": "26px"
                            },
                            title: {
                                color: "#ffffff"
                            },
                            header: {
                                color: "#ffffff"
                            },
                            lineItems: {
                                color: "#ffffff"
                            },
                            subtotalText: {
                                color: "#ffffff"
                            },
                            subtotal: {
                                color: "#ffffff"
                            },
                            notice: {
                                color: "#ffffff"
                            },
                            currency: {
                                color: "#ffffff"
                            },
                            close: {
                                color: "#ffffff",
                                ":hover": {
                                    color: "#ffffff"
                                }
                            },
                            empty: {
                                color: "#ffffff"
                            },
                            noteDescription: {
                                color: "#ffffff"
                            },
                            discountText: {
                                color: "#ffffff"
                            },
                            discountIcon: {
                                fill: "#ffffff"
                            },
                            discountAmount: {
                                color: "#ffffff"
                            },
                            cart: {
                                "background-color": "#0a0a0a"
                            },
                            footer: {
                                "background-color": "#0a0a0a"
                            }
                        },
                        iframe: !1,
                        "text": {
                            title: "Bag",
                            total: "Subtotal",
                            button: "Checkout"
                        },
                        "popup": false
                    },
                    toggle: {
                        iframe: !1,
                        contents: {
                            count: !0,
                            icon: !1,
                            title: !0
                        },
                        text: {
                            title: "Bag"
                        },
                        styles: {
                            toggle: {
                                "font-weight": "bold",
                                "background-color": "#c4c4c4",
                                ":hover": {
                                    "background-color": "#b0b0b0"
                                },
                                ":focus": {
                                    "background-color": "#b0b0b0"
                                }
                            }
                        }
                    },
                },
            });
        });
    }
})();
/*]]>*/