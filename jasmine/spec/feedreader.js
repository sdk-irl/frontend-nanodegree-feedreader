/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* Tests to make sure the allFeeds variable has been defined 
         * and that it is not empty. */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('are URLs', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });
        
        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('is named', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {
        const body = document.querySelector('body');
        /* Test that the menu element is hidden by default. */
        it('hides the menu element by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

         /* Test that menu changes visibility when the menu icon is clicked: 
          * does the menu display when clicked and does it hide when clicked again. */
        it('toggles visibility when the menu icon is clicked', function() {
            const menuIcon = document.querySelector('.menu-icon-link');    
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
     });

    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         
        beforeEach(function(done) {
            loadFeed(0, done);
            });

        it('are in the feed container when the loadfeed is called', function() {
            const feed = document.querySelector('.feed');
            expect(feed.children.length>0).toBe(true);
        });  
    });



    describe('New Feed Selection', function() {
            const feed = document.querySelector('feed');
         /* TODO: Write a test that ensures when a new feed is loaded
          * by the loadFeed function that the content actually changes.
          * Remember, loadFeed() is asynchronous.
          */
        beforeEach(function(done) {
            loadFeed(0);
            loadFeed(1, done);
        });
        
        it('loads new content', function() {
    
         });
    });
      
});
