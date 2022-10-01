// Data Structures 43

// Defining Classes 43.5

    // overview: In this lesson, you'll learn the basics of object-oriented programming—you'll learn how to create and interact with classes. This will help you organize chunks of related code together, thus improving the readability and reusability of your code.

// terms:

    // object-oriented programming: OOP, a programming paradigm where data is stored into objects as individual fields, attributes, or parameters, which the code manipulates through different procedures and methods

    // class instance: an object built to the specifications of a given class

    // constructor: a special function that defines how a new instance of a class is created

// Object-oriented programming is often seen as an alternative programming style to functional programming. 

// Class Instances

    // A class is a blueprint for creating objects which makes it easy to create multiple objects that all have similar properties.

    // Classes are abstract creations that represent an idea.

        // For example, an Event class doesn't represent a specific event but rather the idea of events. This is in constrast to an instance of an Event, which describes a specific event.

        // For example, the Event class would specify that all Event instances which follow from it have the following properties: Name, Start time, End time, and Location.

        // Every event you create is an instance of the class. For example, an instance of the Event class could have the following values, respectively: Lunch, 12:00, 13:00, and Chipotle.

        // Examples of a class and an individual instance:

            // BoardGame

                // Name: Photosynthese; NumberOfPlayers: 2-4

            // Dog

                // Name: Rufio; Age: 8 months; Bread: Labrador

            // House

                // Bedrooms: 4; Bathrooms: 3; Type: Tudor; Location: Massachusetts

            // Song

                // TrackName: Patterns; ArtistName: Steve Gibbs; AlbumName: Adrift

// Class Syntax

    // use the keyword class to define a new class
        class Event {
            // TODO
        }
    
    // to create a new instance of the Event class, you can use the new keyword and invoke the Event class like a function
        const lunch = new Event()

        console.log(lunch) // returns Event {}

// Constructors

    // A constructor is a special function that defines how a new instance of the class is created.

    // In the constructor, you can define the specific properties to be included in the newly created instance.

    class Event {
        constructor() {
            console.log('Calling the constructor function!')
        }
    }

    // if you were to create a new instance using the Event class, you would see the following:
        new Event()
        //> Calling the constructor funtion!
        //> Event {}

        // each time you create a new instance of the class, the constructor function is called

// The this keyword

    // Like other functions, the constructor function is most useful when it has access to parameters that can be used to customize each instance of the class.

        // The values passed in to the constructor function can then be assigned to keys on the this keyword.

    // The this keyword is used to reference the internals of a specific instance.
        // The this keyword is used most often in class definitions to define how instances of that class should function.

    class Event {
        constructor(name, startTime, endTime, location) {
            this.name = name
            this.startTime = startTime
            this.endTime = endTime
            this.location = location
        }
    }

    // run a new event
    const lunch = new Event('Lunch', '12:00', '13:00', 'Chipotle')
    console.log(lunch) 
    /*
        Event {
            name: 'Lunch',
            startTime: '12:00',
            endTime: '13:00',
            location: 'Chipotle'
        }
    */

        // Despite being an instance of the Event class, this object works just like any other. For example, you can use the dot notation to access the startTime and location properties on the lunch instance, like this:
            lunch.startTime //> '12:00'
            lunch.location //> 'Chipotle'

    // create another event instance 
    const dinner = new Event('Dinner', '18:00', '19:30')

    console.log(dinner.location) //> undefined

// Flexible Classes

    // In the above examples, you've only used strings as values, but any value can be assigned to an individual instance of a class.

    // Here's an example that demonstrates the use of conditional statements inside the constructor:

    class Event {
          constructor(name, attendees, startTime, locationName, address) {
            let guests = null
            if (attendees.length === 1) {
              guests = attendees[0]
            } else if (attendees.length > 1) {
              guests = `${attendees.length} attendees`
            }
        
            this.name = guests ? `${name} with ${guests}` : name
            this.details = { startTime, attendees, groupSize: attendees.length }
            this.location = { name: locationName, address }
          }
        }
        
        const event = new Event("Dinner", ["Sal"], 1830, "Frankie's", "477 Rain St.")
        /*
          Event {
            name: 'Dinner with Sal',
            details: { startTime: 1830, attendees: [ 'Sal' ], groupSize: 1 },
            location: { name: "Frankie's", address: '477 Rain St.' }
          }
        */

// Defining A Method

    // Add a toString() method to the Event class

    class Event {
          constructor(name, startTime, endTime, location) {
            this.name = name;
            this.startTime = startTime;
            this.endTime = endTime;
            this.location = location;
          }
          toString() {
            const { name, startTime, endTime, location } = this // destructor the properties from each instance
            return `${startTime} - ${endTime}: ${name} at ${location}`
          }
    }
        // The toString() method will put all the event info into a single string so that it can be easily be displayed.
        // Like the constructor() method, the toString() method accesses each instance using the this keyword.

// Calling A Method

    // You can now create an Event class instance called lunchEvent and call the toString() method on lunchEvent, like this:

    const lunchEvent = new Event("Lunch", "12:00", "13:00", "Chipotle")
    console.log(lunchEvent.toString()) // > 12:00 - 13:00: Lunch at Chipotle

// Defining Methods With Parameters

    // Now, define the isBefore() method, which takes another instance of the Event class and returns true if and only if the event ends before the other event starts.

    // Before defining isBefore(), write a couple of helper methods that will find the hours and minutes of the event, like this:

        getStartHours() {
            return Number(this.startTime.split(":")[0]);
        }
        getStartMinutes() {
            return Number(this.startTime.split(":")[1]);
        }
        getEndHours() {
            return Number(this.endTime.split(":")[0]);
        }
        getEndMinutes() {
            return Number(this.endTime.split(":")[1]);
        }

    // Now you cn use these methods to define the isBefore() method, like this:
    
    class Event {
        constructor(name, startTime, endTime, location) {
          this.name = name;
          this.startTime = startTime;
          this.endTime = endTime;
          this.location = location;
        }
        toString() {
          const { name, startTime, endTime, location } = this
          return `${startTime} - ${endTime}: ${name} at ${location}`
        }
        isBefore(other) {
            return this.getEndHours() < other.getStartHours() || (
            this.getEndHours() === other.getStartHours() &&
            this.getEndMinutes() <= other.getStartMinutes()
            )
        }
  }

        // isBefore() will return true if the current event ends before or right at the start of the other event. Otherwise, it will return false.

    // To see how this method works, first define another instance of the Event class.

    const meeting = new Event('Meeting', '14:00', '15:30', 'Conference room')

    // now you can use the isBefore() method

    console.log(lunchEvent.isBefore(meeting)) //> true
    console.log(meeting.isBefore(lunchEvent)) //> false
    console.log(lunchEvent.isBefore(lunchEvent)) //> false