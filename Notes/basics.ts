// installed TypeScript Compiler (TSC) globally using npm
// npm install -g typescript

console.log("hello world!");

// running 'tsc basics.ts' yields file output: basics.js!
// TypeScript applies its ruleset to transform the .ts into a .js file
// in this process, it will yield error messages, fix indentation, and keep comments (though it may adjust the whitespace a bit)
// TypeScript will not, not compile (and update, if already existing) the js file even with type errors; you know best after all! 
// if you don't want this feature, you can run a .ts file with a flag: 'tsc --noEmitOnError basics.ts'

function greet(person: string, date: Date) {
    // compiling to JS will remove the above annotations
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
    // compilation will also convert this `template string` to string concatenations, unless using the target es2015: 'tsc --target es2015 basics.ts'
}

greet("Griffin", new Date());  // surprisingly, calling Date() yields a string, so creating a new Date object yields the desired result

// you don't always have to write type annotations (person: string), as long as TS would be able to infer what type it is, you're good!


// Strictness levels exist, which allow you to go beyond the checking defaults and turn TypeScript into a more robust experience
// CLI strict flag or "strict": true in a tsconfig.json toggles all flags on
// two most important flags are noImplicitAny and strictNullChecks
