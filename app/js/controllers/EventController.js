'use strict';

eventsApp.controller('EventController',
	function EventController($scope){
		$scope.event = {
			name: "Angular Boot Camp",
			date: '1/1/2013',
			time: '10:30 am',
			location: {
				address: "Karstulantie 8",
				city: "Helsinki"
			},
			imageUrl: "img/Angularjs-large.png",
			sessions: [
				{
					name: "introduction",
					creatorName:"Hung",
					duration: "1 hr",
					level: "basic",
					upVoteCount: 0
				},
				{
					name: "prediction techniques",
					creatorName: "Quang",
					duration: "2 hr",
					level: "intermediate",
					upVoteCount: 0
				},
				{
					name: "visualization",
					creatorName: "Timo",
					duration: "3 hr",
					level: "Advanced",
					upVoteCount: 0
				}
			]
		}
		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		}
		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		}
	}
);
