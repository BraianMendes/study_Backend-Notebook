# Gang of Four Design Patterns

Over 20 years ago the iconic computer science book “Design Patterns: Elements of Reusable Object-Oriented Software” was first published. The four authors of the book: Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, have since been dubbed “The Gang of Four”. In technology circles, you’ll often see this nicknamed shorted to GoF. Even though the GoF Design Patterns book was published over 20 years ago, it still continues to be an Amazon best seller.

The GoF wrote the book in a C++ context but it still remains very relevant to Java programming. C++ and Java are both object-oriented languages. The GoF authors, through their experience in coding large scale enterprise systems using C++, saw common patterns emerge. These design patterns are not unique to C++. The design patterns can be applied in any object oriented language.

As a Java developer using the Spring Framework to develop enterprise class applications, you will encounter the GoF Design Patterns on a daily basis.

The GoF Design Patterns are broken into three categories: Creational Patterns for the creation of objects; Structural Patterns to provide relationship between objects; and finally, Behavioral Patterns to help define how objects interact.

# Gang of Four Design Patterns

## Creational Design Patterns

<ul>
<li>Abstract Factory. Allows the creation of objects without specifying their concrete type.</li>
<li>Builder. Uses to create complex objects.</li>
<li>Factory Method. Creates objects without specifying the exact class to create.</li>
<li>Prototype. Creates a new object from an existing object.</li>
<li>Singleton. Ensures only one instance of an object is created.</li>
</ul>

<ul>
Structural Design Patterns
<li>Adapter. Allows for two incompatible classes to work together by wrapping an interface around one of the existing classes.</li>
<li>Bridge. Decouples an abstraction so two classes can vary independently.</li>
<li>Composite. Takes a group of objects into a single object.</li>
<li>Decorator. Allows for an object’s behavior to be extended dynamically at run time.</li>
<li>Facade. Provides a simple interface to a more complex underlying object.</li>
<li>Flyweight. Reduces the cost of complex object models.</li>
<li>Proxy. Provides a placeholder interface to an underlying object to control access, reduce cost, or reduce complexity.</li>
</ul>

<ul>
Behavior Design Patterns
<li>Chain of Responsibility. Delegates commands to a chain of processing objects.</li>
<li>Command. Creates objects which encapsulate actions and parameters.</li>
<li>Interpreter. Implements a specialized language.</li>
<li>Iterator. Accesses the elements of an object sequentially without exposing its underlying representation.</li>
<li>Mediator. Allows loose coupling between classes by being the only class that has detailed knowledge of their methods.</li>
<li>Memento. Provides the ability to restore an object to its previous state.</li>
<li>Observer. Is a publish/subscribe pattern which allows a number of observer objects to see an event.</li>
<li>State. Allows an object to alter its behavior when its internal state changes.</li>
<li>Strategy. Allows one of a family of algorithms to be selected on-the-fly at run-time.</li>
<li>Template Method. Defines the skeleton of an algorithm as an abstract class, allowing its sub-classes to provide concrete behavior.</li>
<li>Visitor. Separates an algorithm from an object structure by moving the hierarchy of methods into one object.</li>
</ul>
