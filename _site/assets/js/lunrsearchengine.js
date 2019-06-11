
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please explore our content using the tags below or get back to the homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About Stacktical",
    "body": "Powered by the DSLA token, Stacktical is a Service Level Agreement (SLA) platform for documenting, bargaining and tracking service commitments between service providers, their partners and their customers. It enables service providers to drive customer acquisition and retention by transparently committing to a baseline quality of service, and automatically executing remediation scenarios, such as delay and downtime compensations, when agreed service levels are not met. For more information about Stacktical and the DSLA token, please go to https://stacktical. com. "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                 2 years and a new blog                              :               Changing how we tell stories:                                                                                                                                                                       Wilhem Pujar                                10 Jun 2019                                Read Story                                                                                      All Stories:                                                                                                     Weekly Status Update: June 3rd, 2019 - June 9th, 2019              :       A quick look at what kept us busy last weekProduct &amp; Technology:                                                                               Team Stacktical                10 Jun 2019                Read Story                                                                                                                     2 years and a new blog              :       Changing how we tell stories:                                                                               Wilhem Pujar                10 Jun 2019                Read Story                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/reporting/2019/06/10/weekly-status-update-june-3-june-9.html",
    "title": "Weekly Status Update: June 3rd, 2019 - June 9th, 2019",
    "body": "2019/06/10 - A quick look at what kept us busy last weekProduct &amp; Technology: Product:  Stacktical WebsiteInitially used as the platform destination, https://stacktical. com will soon host our new corporate website.  Stacktical BlogWe’ve finished deploying our new blogging system (you’re here!) and are currently proceeding the migrations of our posts. From now on, https://blog. stacktical. com will be the main destination for our publications.  DSLA NetworkThe Product Management team is experimenting with ways to collect feedbacks about the upcoming Stacktical Platform.  Practice ManagementWe are refactoring of git flows, Definition of Ready, Definition of Done, as well as other agile deliverables in preparation with the upcoming sprint. Technology:  DSLA NetworkAfter diving into a first Oracle integration, we have decided to pursue our experiments using a competing solution. Business &amp; Marketing: Business:  SalesWe have closed a deal with a lead in the media industry. 50% of media companies requiring 99. 999% uptime SLA from their cloud service provider. This collaboration will be the opportunity to further explore the needs of this vertical. Marketing:  Sales EnablementOur commercial presentation has been updated following our discussion with a top 20 cryptocurrency exchange. This new deck will serve as a basis for further business development efforts with exchanges and financial services.  BloggingWe are exprimenting with new audio and video format.  ContestsWe have started designing a new contest in preparation with the upcoming listing of the DSLA token. Legal &amp; Finance: Legal:  OpsTo improve our efficiency in dealing reaching agreements with our stakeholders, the Legal Team has started refactoring the different steps of our legal lifecycle. Our Legal Manager will introduce a series of flow charts describing improved operations. We have initiated a series of workshop to ensure the General Data Protection Regulation (GDPR) compliance of the upcoming DSLA Network.  Cryptocurrency ExchangesWe have approached major DEX platform that we have been experimenting with for the past weeks. We’re hoping that having DSLA also listed on a DEX, along with being listed on centralized exchanges, will provide more options to the community.  PartnershipsWe have signed a new partnership with a fellow blockchain company to empower new Decentralized SLA use cases. We will make sure to make a proper announcement in due time. "
    }, {
    "id": 6,
    "url": "http://localhost:4000/company/2019/06/10/a-new-blog-for-stacktical.html",
    "title": "2 years and a new blog",
    "body": "2019/06/10 - Changing how we tell stories: One of my main objectives for the past year has been to cultivate our ability to write engaging content about the Stacktical ecosystem. Between the mathematical models that we use to predict the scalability of systems, our ongoing efforts in decentralizing service level agreements and our daily operations, there are endless opportunities to share insights with our ever growing community. So far, our Medium publications have proved useful in doing exactly that, often through rendez-vous like our weekly status updates. But in order to ensure your ability to consume Stacktical content without restrictions in the long run, we’ve decided to embrace a more open alternative as our main communication channel. Moving forward, the Stacktical Blog at blog. stacktical. com will your premier destination for product, market and corporate news about Stacktical and the DSLA token. We are ready to double down on blogging while venturing into new, multimedia grounds. Thank you for visiting! "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});