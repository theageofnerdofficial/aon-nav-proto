/* myNerd helper functions — used in reducers but
   written here to keep things neat and tidy:
 ********************************************************/
const myNerd = {
  checkSystem: {
    /* The following function checks if object has a property & 
      what its index is. For example, "nintendoModern" looks
      like the following & so has an index of 7 at level 3:
      nerdReducer.category[2].level3[7].nintendoModern
      ********************************************************/
    getCatIndex: (category, curentLvl) => {
      let catIndex;
      curentLvl.forEach((el, index) => {
        if (curentLvl[index].hasOwnProperty(category)) {
          catIndex = index;
        }
      });
      return catIndex;
    },

    // Update modifies the copied state object and returns value to reducer:
    update(state, action) {
      let nerdCatCp = state.category;
      const { actionType, category, level } = action.payload;
      const lvlProperty = 'level' + level;
      const curentLvl = nerdCatCp[level - 1][lvlProperty];
      const catIndex = myNerd.checkSystem.getCatIndex(category, curentLvl);

      //
      if (typeof catIndex != 'undefined') {
        const currentLvlObj = curentLvl[catIndex][category];

        // If it's an expansion, toggle "isExpanded" property:
        if (actionType === 'expansion') {
          const isExpanded = currentLvlObj.isExpanded;
          nerdCatCp[level - 1][lvlProperty][catIndex][
            category
          ].isExpanded = !isExpanded;
          // If it's an expansion, toggle isExpanded property:
        } else if (actionType === 'checked') {
          const isEnabled = currentLvlObj.isEnabled;
          nerdCatCp[level - 1][lvlProperty][catIndex][
            category
          ].isEnabled = !isEnabled;

          // Children & grandchildren properties:
          const children =
            nerdCatCp[level - 1][lvlProperty][catIndex][category].children;
          const gchildren =
            nerdCatCp[level - 1][lvlProperty][catIndex][category].gchildren;

          // Loop over children & assign the same enable value as parent:
          children.forEach((child) => {
            const childLvlProp =
              nerdCatCp[level]['level' + parseInt(parseInt(level) + 1)];
            childLvlProp.forEach((c, index) => {
              if (c[child]) {
                nerdCatCp[level]['level' + parseInt(parseInt(level) + 1)][
                  index
                ][child].isEnabled = !isEnabled;
              }
            });
          });

          // Loop over gchildren & assign the same enable value as gparent:
          gchildren.forEach((gchild) => {
            // If no grandchild, return out:
            if (!gchild) return;
            const gchildLvlProp =
              nerdCatCp[parseInt(level) + 1][
                'level' + parseInt(parseInt(level) + 2)
              ];
            if (!gchildLvlProp) return;
            gchildLvlProp.forEach((g, index) => {
              if (g[gchild]) {
                nerdCatCp[level + 1]['level' + parseInt(level + 2)].forEach(
                  (gc, index) => {
                    if (gc[gchild.toString()]) {
                      nerdCatCp[level + 1]['level' + parseInt(level + 2)][
                        index
                      ][gchild.toString()].isEnabled = !isEnabled;
                    }
                  }
                );
              }
            });
          });
          //
          // all descendants
          //
          //
        }
      }
      return nerdCatCp;
    },
  },
};

export default myNerd;
