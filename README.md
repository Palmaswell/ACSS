# Atomic CSS Architecture


This documentation is a working draft that should be constantly improved and reviewed. This document should be considered as a working recommentation.

**Atomic CSS Architecture** is a *CSS Design methodology* for front-end developer teams working on larger projects, a systematic approach towards robuts, portable and scalable web interfaces. It introduces a combination of small and simple rule sets that ease CSS develoment between larger teams and projects.

Even though **Atomic CSS Architecture** is only a working recommendation, I strongly advice larger front-end developers teams to establish a code convention for their projects in order to write robust code. Code conventions allow developers to easily switch between projects and instantly recognize the structure and meaning of their code implemenation, subsequently increasing productivity and performance in the working flow.

This documentation leans on the coding guide principles from SinnerSchrader and advocates the concepts of modularity, scalability and maintainability. It also discusses into some extend the ideal semantic construction of the markup that escorts the written CSS.



## Heritage
The phrase and concept *Atomic Design* was coined by Brad Frost in 2013. He developed a web design methodology based on the basic concepts of chemistry. In essence it deals with the composition, structure and properties of interface elements and their respective changes.

The web landscape is constantly evolving, introducing more powerful applications with countless variety of devices. Larger front-end developer teams without a design architecture plan, can easily loose control over their code, or better said, they loose control over the developed application. 

> If you fail to plan, you are planning to fail! ― Benjamin Franklin

Code has an interesting nature and on larger projects with developers coming and going, code starts creating a mind of its own, and even though CSS doesn´t build application logic, it´s still code that needs to be maintained. CSS development without architecture makes scalability and maintainability a difficult task to tackle, and it is for maintainability customers more expensive. 

At this very moment we are experiencing the great renaissance of front-end style guides. An amazing opportunity to increase added value to our service offerings. This kind of modularization and standardization brings a set of advantages to customers and developers. A front-end style guide promotes code robustness, portability and scalability, taking the meaning of code convention to the next level.

**Atomic CSS Architecture** is an extension of Brad Frost´s *Atomic Design*, and focuses entirely on CSS and HTML architecture. It uses the basic concepts of chemistry as a building foundation as well.


## The Nucleus / Core Definition

**Atomic CSS Architecture** is a *"CSS Design methodology"*  of designing web interfaces with CSS in order to satisfy specified project requirements. Basic chemistry principles are the foundation of this systematic composition of web applications. 

**The nucleus concept of Atomic CSS Achitecture is the deconstruction of interfaces into abstract visual elements. We search and recognize design patterns and break them up into single elements (our interface matter).**


We write low impact CSS, ideally, with a minimum amount of unused style declarations. In order to reduce our cascading footprint, we need to keep the CSS specificity low at all times. The inception rule: don´t go more than 2 levels deep. There are some exceptions to the 2 level inception rule. The HTML elements `<ol>, <ul>, <dl> and <table> ` have a rigid structure by nature, when used correctly they will remain unchanged for the rest of their existence. When we create a navigation we are writing markup that looks like the following example:

```html
<nav>
	<ul>
		<li><a href="/">nav link one</a></li>
		<li><a href="/site-two">nav link two</a></li>
		<li><a href="/site-three">nav link three</a></li>
	</ul>
</nav>
```

In this particular case we can break our CSS inception rule. Nevertheless do not go  more than four levels deep and take advantage of this HTML structure for the sake of markup aesthetic. The above example will be rarely changed once used and doesn´t require the use of our mandatory classes, which takes us to the next point.

In **Atomic CSS Architecture** HTML elements without a rigid structure should always use a class. Avoid element selectors and qualifing class selectors with elements in your CSS. Element selectors belong only in our normalize files (or base styles), normalizing is done as needed in order to avoid over-styling elements.

All other elements use class selectors for several reasons:

* Portability.
* Robustness.
* Code reuse.
* Reduce markup dependencies.
* Promote the appropriate usage of context related semantic HTML elements.

Code readability and aesthetic is a crucial point in this convention, keep the amount of CSS lines per file low, but more importantly group your CSS declarations logically. Indent your code accordingly and be consitent with your indentation choice throughout the project. Most of us work with CSS preprocessors like Less or Sass. When using such tools control the generated output to ensure we are complying with our defined CSS rules.

> We are not designing pages,
> we are designing systems of components
> - Stephen Hay


## Atomic Anatomy

Atomic CSS Architecture is made out of three elements:

1. Atoms
2. Molecules
3. Modules


### Atoms
Atoms are in chemistry the basic units of matter and in **Atomic CSS Architecture** atoms are the basic composition properties of our user interface. Specifically they refer to individual HTML elements, font stacks, icons and color patterns. Atoms are tagged with the class prefix "a-".  Some examples of atoms are:

```html
<a href="/" class="a-navlink">a navigation link is an atom</a>
        
<button class="a-button">a button is an atom</button>
        
<h1 class="a-headline">a icon mixin is an atom too :)</h1>
```
Usually UX designers, art directors and front-end developers create a static design of the application. Once concept and design are done it´s time for us to make an implementation plan.
To take the time to consider the ideal development approach is always time well invested. Take your time and make an architecture plan. The main role of this plan is the abstraction of visual elements and categorization of them into patterns and relationships. We call this process **atomic line filtering**. In physical sciences it is used to filter electromagnetic radiation and in **Atomic CSS Architecture** used to filter interface elements.

#### Atomic Line Filtering

Atomic line filtering is the process of scanning design files and filtering single elements (atoms) of the same lineage for categorization. A basic example: we scan design files and filter the buttons of the interface. We categorize our buttons based on thier lineage and reflect on their behavior and visual states. Now that we have a collection of all the buttons of the site, we remove all visual differences from the button and leave only the core commonalities that will generate our global atom style, in this case **.a-button** is our global definition of the parent button style.

```html
<button class="a-button f-edit">Edit Me!</button>
```

Atoms have a conceptual purpose, this conceptual purpose should be reflected on the class name of choice. Class naming should never be based on visual properties or on content relationships. The class of choice should describe the element´s purpose of existence.

This shouldn´t be necessary to say, but style and content are strictly separated from each other. Through the separation of visual design, markup and a consequent class naming, we can choose the appropiate semantic element for that given context.


#### Atom Fusion

Now that we have defined our global button, it´s time to get more specific and style our buttons for their intended purpose. In the above example we used the class **.f-edit** describing a button with an edit functionality. The "f-" prefix stands for atom fusion and it represents the combination of global and specific properties of an atom. We fuse our edit button styles with our global button styles.


#### Atoms Summary

* Atoms are single HTML elements, fonts and color  (our interface basic units).

* Atoms have an specific function within their environment. The naming of classes mirror the function of an atom and not its design or content.

* Atoms are defined globally.

* Atom classes begin with the prefix ".a-". Prefixes ease the recognition of elements within our markup.

* Atom classes are additionally tagged with the prefix ".f-" representing a specific look or purpose of our element.

* Keep your CSS files DRY (Don´t Repeat Yourself). Avoid repeating CSS style declarations at all costs.

* Always take a look at your compiled CSS, it´s recommended for a CSS rule set to have repeated style declarations.
 

### Molecules

Molecules are two or more atoms bond together. In **Atomic CSS Architecture** a molecule is an specific atom constitution that visually defines an interface component. Molecules are usually small and fulfill a single purpose or task. The idea is to create reusable small components that represent common patterns of our interface. Molecules take different forms and sizes, some examples are: a navigation bar, a login form, a media teaser and so on.

```html
<a href="/" class="m-teaser">
	<figure>
		<img class="a-teaser-image" src="dummy/src.jpg" alt="An image is an atom too" />
		<figcaption class="a-text-copy">Some well crafted copytext</figcaption>
	</figure> 
</a>
```
	
The procedure remains the same, we filter the interface for molecules and abstract their core visual commonalities and use them in a global rule set. The wrapper or parent HTML element surrounding our atoms use the prefix ".m-" and defines our molecule. We only define the styles of the molecule composition and the visual interaction of its atoms. Avoid styling atoms at a molecular level (there is one exception discussed below).

Use relevant class names that describe the functionionality of the molecule but at the same time are neutral and portable. Molecule classes shoudn´t describe the content, but rather they should allow molecules to be applicable in any content. Remember that class names communicate useful information to developers and have nothing to do with semantics, so be sensible about the class names you choose.
	

#### Molecular Fusion

Molecular fusion deals with the visual differentiation of the same kind of molecules. It is the categorization of a global component into different sub-classes. Be consitent when writing your molecules markup, and define the visual differences in your CSS, this avoids maintainance overhead through markup reduction. 

Going back to our example: during our interface deconstruction we recognized the existence of two types of teaser molecules and categorized them as *Primary* and *Secondary*, we also recognized the existence of three different sizes for both of them. Now we have two meaningful teaser categories to differentiate our molecules:


```html
<a href="/" class="m-teaser f-primary-large">
	<figure>
		<img class="a-teaser-image f-hero" src="dummy/src.jpg" alt="An image is an atom too" />
		<figcaption class="a-text-copy">Some well crafted copytext</figcaption>
	</figure>
</a>
```

In this specific case, we styled all the visual commonalities of our primary teaser and used fusions for the individual sizes. It´s not recommended use more than three classes on the same HTML element in order to avoid verbose markup and promote markup aesthetic. Preprocessors like Less/Sass give us the possibility to make the development styles more portable and flexible. This is a minimal example of our **"primary teaser large"** implementation in less:

```less
.primary-teaser{
	// Some global declarations for our
	// primary teaser category
}
	
.f-primary-large{
	&:extend(.primary-teaser all);
		
	// Now the specific declarations related to the large size
}
```


#### Molecular Decay

At some point in development you will encounter an atom within a molecule composition that looks or behaves completely different. **Molecular decay** is our wildcard for styling atoms at a molecular level. This is a very specific molecular stage, and should be used with care.

We declare a specific atom style within that molecular enviroment. The style declarion must happen within the molecule class selector.

	
#### Micro Layout

It´s possible for molecules to live inside other molecules, most commonly when a component is filled with a lot of visually displayed data. Molecules can comprise a small living component within their molecule scope. In this situation it is important to always write style declarations in the right context of the parent molecule. Group your molecule styles logically together and be careful with the amount of times you nest your selectors.

Usually layout is a subjects that belongs entirely to the **Module** atomic element. In some special cases though, we have to take care of micro layouts, speak, the positioning of molecules living inside other molecules. Micro layouts are defined globally in our base file in our molecules folder. The class names should be portable and generic and are prefixed with ".m-", here is an example in less:


```less
// Micro layout style example for molecules 
// layout living inside other molecules

.m-col{
    box-sizing: border-box;
	display: inline-block;
    width: 50%;
	vertical-align: top;
    .a-regap();
}
```

#### Molecular Hosting & Coexistence

A rule within ** Atomic CSS architecture** is a solid and semantic HTML structure, we avoid unnecesary elements like `<div>´s` just for styling purposes and prefer a clever HTML structure that suits our atomic requirements. Aesthetic plays an important role in our style convention. 

You might encounter the situation where a molecule has two different visual tasks to fulfill. In order to avoid unnecesary `<div>´s` within our HTML a molecule can host two different molecules within the same HTML element. Take into consideration that the CSS rule sets for both molecules exist independently from each other and can be used on their own as a single molecule. 


#### Molecules Summary

* Molecules are groups of atoms bonded together.

* A molecule is an specific atom constitution and represent a small component.

* Molecules are usually defined globally and are portable.

* "Molecular Decay" define visual exception for specific atoms in an molecule environment.

* Do not use more tha three classes on the same HTML element (do not count javascritp specific classes).

* Micro layout style declarations define the layout of molecules living within other molecules.

* The rule of thumb for an HTML element hosting two molecules is that they are independent from each other.



### Modules

We reached our last **Atomic CSS Architecture** element; **the module**. You might think, a module kind of deverts from our chemistry analogy, right? well not exactly. Modules exist in a several amount of contexts and their meanings are into some extend related. In nature for example, a module refers to the construction of cellular organisms by joining standard units together to form larger compositions, like the hexagonal cells in a honeycomb.

We have now reached a point where we need to communicate our work with other peers (designers / pm´s /customers), they are all acquainted with the module terminology. Customers are not interested with atoms or molecules and they shouldn´t bother with them neither. These methods and terminologies are used strictly to provide front-end developers a set of tools to work with.

In **Atomic CSS Architecture** a module is a independent layout compostion of molecules joined together to form portable interface units. Portability, code reuse and code impact are at this stage crucial. Modules mostly occur once. The good thing is, if we implemented our atoms and molecules correctly them we are almost done with our job.

> Take good care of your atoms and molecules and your modules will take care of themselves.

Each module should be designed to exist as a standalone element, that can be moved through out the application without breaking. A module consists entirely of layout style declarations and their only job is to control the visual composition of molecules (components). For example: the header or footer of a site is a module. The class naming of modules should be specific and diverges with the generic convention of our two previous elements. The class of the module should exacty describes the module itself. Here a basic example of a module composition in HTML:

```html
<section class="l-news-slider">
	<h2 class="a-h1">News Slider Main Headline</h2>
	<p class="a-text-copy">Some well crafted intro text...</p>
	<ul class="m-slider">
		<li>
			<a href="/" class="m-teaser f-primary-large">
				<figure>
					<img class="a-teaser-image f-hero" src="dummy/src.jpg" alt="An image is an atom too" />
					<figcaption class="a-text-copy">Some well crafted copytext</figcaption>
				</figure>
			</a>
		</li>
		<li>
			.......
		</li>
	</ul>
</section>
```

Modules are tagged with the prefix ".l-" and the prefix stands for layout. The module prefix is inherited by our parent HTML element and is a standalone element, speak an element with no other classes or properties (with the exception of javascript classes). The idea is that your module can be exported per copy/paste, can be deleted, replaced without causing any side effects. Modules are specific and can be thrown away at any time.

If you work with less/sass you probably create mixins for grid systems. Grid mixins should be implemeneted on modules on the wrapper element. It´s important to mention that media queries are controlled over the module element too. Atoms or molecules diversifications given by changes on the viewport size or different devices should be implemented at a modular level. Device and viewport changes are strictly layout related, if we decide we don´t need a module any more we can delete it without affecting our existing atoms and molecules environment.

#### Module Summary

* Modules are independent layout compostions of molecules joined together to form a portable interface unit.

* Modules are tagged with the prefix ".l-".

* Modules in HTML are parent/wrapper elements.

* Media queries are controlled in the module element.

* Your grid system should be defined globally and inherited by the module wrapper.

* Modules are portable.

* Modules can be removed or deleted without leaving code footprint. 
 


### Atomic File Structure

It´s recommend to write the denpendencies of each atom/molecule/module on your less/sass file to have a clear overview of their composition and relationships. There are no really performance disadvantages about this method and it promotes readability and maintainability.

```less
// MOLECULE X

// Molecules are group of atoms bond together.
// Molecules can be composed out of other molecules (Atomic CSS Architecture).

// Dependencies
@import "../atoms/typo";
@import "../atoms/buttons-links";
@import "../vars/colors";
@import "../vars/basic";
@import "../mixins/mixins";
```


This is an example file structure for a project using **Atomic CSS Architecture**:

- App
    - Modules
        - Module X
            - View (Template)
            - Styles
                - Module (Layout)
            - Scripts

    - Assets
        - Less
            - Atoms
            	- Typo
            	- Headlines
            - Molecules
            	- Login Form
            	- Navigation
            - Modules
            	- Header
            	- Slider
            - Mixins
            - Vars

        - Scripts
        - Fonts
        - Etc

- Build
    - CSS
        - Main
        - Main.min
    - Scripts
        - Main
        - Main.min

### Thanx!
I would like to thank SinnerSchrader for supporting the development this CSS architecture methodology.