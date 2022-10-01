// robust server structure 31

// advanced tips 31.7

    // overview: As an Express API gets larger and more complex, you may notice some code that violates the single-responsibility principle. You may also notice code that is duplicated in several places. In this lesson, you will learn some advanced techniques to improve your Express APIs.

// There is a special locals property on the response that can be used to share variables scoped to the request. The locals property is an object where you can add properties that will be available only during that request-response cycle. Once the request-response cycle ends (meaning that the response has been sent to the client), the locals object is deleted.

//