const credentials = {
    validUsername: {
        user1:'standard_user',
        user2:'locked_out_user',
        user3:'problem_user',
        user4:'performance_glitch_user',
        user5:'error_user',
        user6:'visual_user'
    },
    invalidUsername: 'invalid_username',
    password: 'secret_sauce'
}

const elements = {
    title:'Swag Labs',
    loginPage:{
        username:'[data-test="username"]',
        password:'[data-test="password"]',
        loginButton:'[data-test="login-button"]',
        error:'[data-test="error"]',
        errorCloseIcon:'[data-test="error-button"]',
        mismatchErrorMessage:'Epic sadface: Username and password do not match any user in this service',
        usernameErrorMessage:'Epic sadface: Username is required',
        passwordErrorMessage:'Epic sadface: Password is required'
    },
    openMenu:{
        icon:'[data-test="open-menu"]',
        allItems:'[data-test="inventory-sidebar-link"]',
        about:'[data-test="about-sidebar-link"]',
        aboutUrl:'https://saucelabs.com/',
        logout:'[data-test="logout-sidebar-link"]',
        resetApp:'[data-test="reset-sidebar-link"]',
        close:'[class="bm-cross-button"]'

    },
    shoppingCart:{
        icon:'[data-test="shopping-cart-link"]',
        url:'https://www.saucedemo.com/cart.html',
        continueShopping:'[data-test="continue-shopping"]',
        checkout:{
            button:'[data-test="checkout"]',
            firstName:'[data-test="firstName"]',
            lastName:'[data-test="lastName"]',
            postalCode:'[data-test="postalCode"]',
            cancel:'[data-test="cancel"]',
            contine:'[data-test="continue"]'
        },
        remove:{
            sauceLabsBackpack:'[data-test="remove-sauce-labs-backpack"]',
            sauceLabsBikeLight:'[data-test="remove-sauce-labs-bike-light"]',
            sauceLabsBoltTshirt:'[data-test="remove-sauce-labs-bolt-t-shirt"]',
            sauceLabsFleeceJacket:'[data-test="remove-sauce-labs-fleece-jacket"]',
            sauceLabsOnesie:'[data-test="remove-sauce-labs-onesie"]',
            testThirtRed:'[data-test="remove-test.allthethings()-t-shirt-(red)"]'
        }

    },
    filter:{

    },
    cart:{
        url: 'https://www.saucedemo.com/cart.html'
    }
    
}