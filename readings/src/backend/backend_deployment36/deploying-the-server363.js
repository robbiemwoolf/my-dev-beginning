// Backend Deployment 36

// Deploying A Monorepo

    // overview: In this lesson, you will use starter code to deploy a monorepo.

// terms:

    // monorep: a repository that contains both the client and the backend projects

// DO THIS: Deploy A Monorepo To Heroku
    // cd starter-name-generator
    // heroku create name-generator-backend-rw
    // heroku create name-generator-client-rw
    // git remote add heroku-backend giturl-just-generated
    // git remote add heroku-client giturl-just-generated
    // git add .
    // git commit-m "first commit"
    // git subtree push --prefix backend heroku-backend main
    // git subtree push --prefix backend heroku-client main
    // heroku open -a name-generator-client


// REDEPLOYING  

    // go to client/App.js and change the fetch URL to the one that you just deployed
    useEffect(() => {
        fetch('https://name-generator-backend-rw.herokuapp.com/generate')
           .then((res) => res.json())
           .then((nme) => setName([nme]))
    }, [])

    // git add .
    // git commit -m "Fix fetch URL"
    // git subtree push --prefix backend heroku-backend main
    // git subtree push --prefix client heroku-client main

// you can see your application's metrics, logs, deployment history, and settings in the application's dashboard

