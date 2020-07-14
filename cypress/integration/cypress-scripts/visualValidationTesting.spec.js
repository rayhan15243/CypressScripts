describe("Visual Validation King'\s Foundation", function(){
       
        beforeEach(() => {
          cy.visit("http://dev.preview.kcl.contensis.cloud/study/test-foundation-course")
          cy.eyesOpen({
            testName: 'King\'s Foundation',
            appName: 'King\'s Foundation Page',
            browser: [
                 { width: 1440, height: 900, name: 'chrome' },
                 { width: 1440, height: 900, name: 'firefox' },
                 { width: 1440, height: 900, name: 'safari' },
                 { width: 1440, height: 900, name: 'ie11' },
                 { deviceName: 'iPhone X'},
                 { deviceName: 'Galaxy S5'}
            ],
            matchLevel: "Layout"
           });
         });
     

    it('Physics Subject Area', function() {
    

      cy.eyesCheckWindow({
        layout: [
         
        ],
          fully: true
      });
    
    });

    afterEach(() => {
        cy.eyesClose();
      });
 });