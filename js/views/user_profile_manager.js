define(["jquery","underscore","backbone"],function(e,t,n){var r=Backbone.View.extend({el:"#user-profile",events:{"click .sign-out":"signOut"},initialize:function(){this.listenTo(this.model.user(),"change:author",this.renderUsername),this.renderUsername(),this.renderSigninUrl()},renderUsername:function(){var e=this.model.user();e&&e.getUsername()?(this.$(".icon-user").css("backgroundImage","url("+e.getThumbnail()+")"),this.$(".username").html(e.getDisplayUsername()),this.$el.addClass("user-signed-in")):this.$el.removeClass("user-signed-in").css("backgroundImage","")},renderSigninUrl:function(){this.$(".sign-in").attr("href",this.model.user().signin())},connect:function(e){window.open(e,"hybridauth_social_sing_on","location=0,status=0,scrollbars=0,width=800,height=500")},signOut:function(e){e.preventDefault(),this.model.user().clear()}});return r});