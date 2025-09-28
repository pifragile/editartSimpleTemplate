# EditART Simple Template Instructions

This is a simple, unopinionated template for creating projects on EditART.

## Create your art
- Make a sketch that **renders fast**.  
- Use the variables `m0`, `m1`, `m2`, `m3`, `m4` which are the values of the 5 sliders.
> **_IMPORTANT:_** Every single part of the output must ONLY depend on the values `m0`..`m4`. Otherwise the pieces will change after minting.
- The entrypoint is the `drawArt()` function which will be triggered automatically everytime the sliders change. Find an example in `index.js`.
- Call `triggerPreview()` at the point in time when the preview image should be renderd.

- If your project is animated, please restart the animation on each call to `drawArt()`
- Your artwork should be able to handle window resizing. An event listener is active that will call `drawArt()` every time the window size changes.
- If you use any libraries, include all source files in the project. Do not load any dependencies from the internet.
- All token previews will be in square format.


## Randomness

If you need randomness, you can use the functions `randomM0()`..`randomM4()`
these functions provide randomness seeded by the respective values `m0`..`m4`.  
> **_NOTE:_** You can set the `randomSeedEditArt` variable in `index.html` to any string you like in order to distinguish your randomness from the one of other projects.
> **_IMPORTANT:_** Don't use any source of randomness other than the one described above.


## Sliderless Mode

If you want to use the sliderless feature as can be seen in [this example](https://www.editart.xyz/series/KT1VwpEbuWsxevM9JGF9dG5JXT4bmpNDYp3h), you can simply use `randomFull()` as your randomness function and test in the [sliderless sandbox](https://www.editart.xyz/sandbox?sliderLess=true).


## Testing
In order to test your project with the EditART platform, start a local development server of your project and paste its address in [the sandbox](https://www.editart.xyz/sandbox) and you can start playing around with the sliders.


## Project ready or questions?
Is you have a finished project or any questions, send me a DM on twitter [@pifragile](https://twitter.com/pifragile). Looking forward to hearing from you!
