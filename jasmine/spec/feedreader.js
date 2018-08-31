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
        /* Test that ensures when the loadFeed function
         * is called and completes its work, there is at least
         * a single .entry element within the .feed container. */
 
        //Read Matthew Cranford's blog to understand this async test, but did all work on my own         
        beforeEach(function(done) {
            loadFeed(0, done);
            });

        it('are in the feed container when the loadfeed is called', function() {
            const feed = document.querySelector('.feed');
            expect(feed.children.length>0).toBe(true);
        });  
    });

    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed');
        const feedOne = [];
        const feedTwo = [];
         /* Test that when a new feed is loaded by the loadFeed function
          * the content actually changes. */
        beforeEach(function(done) {
            loadFeed(0);
            Array.from(feed.children).forEach(function(data) {
                feedOne.push(data.innerText);
            console.log(feedOne);
            });
            loadFeed(1, done);
        });
        
        it('loads new content', function() {
            Array.from(feed.children).forEach(function(data) {
                feedTwo.push(data.innderText);
            });
            expect(feedOne).not.toEqual(feedTwo);
        });
    });
});