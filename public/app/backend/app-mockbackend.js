'use strict';

angular.module(ModuleName).run(function($httpBackend){

  /*$httpBackend.whenPOST('/api/login').respond(function(method, url, data) {
    var code = 500;

    var respData = {
      login: false,
      admin: false,
      message: ''
    };
    data = JSON.parse(data);

    for (var i = BEUsers.length - 1; i >= 0; i--) {
      if(BEUsers[i].userName === data.params.userName && BEUsers[i].password === data.params.password) {
        code = 200;
        respData.login = true;
        respData.admin = BEUsers[i].admin;
        respData.message = '';
      }
      else {
        respData.message = 'Wrong Credentials';
      }
    };
    var respData = 'hey!!';

    return [code, respData, {}];
  });*/

  /*$httpBackend.whenGET('/api/posts').respond(function(method, url) {
    var code  = 201;
    var respData = {
      posts: backendPosts
    };
    return [code, respData, {}];
  });

  var BEUsers = [
    {
      'userName': 'user1',
      'password': '123',
      'admin': false
    },
    {
      'userName': 'user2',
      'password': '123',
      'admin': true
    },
    {
      'userName': 'user3',
      'password': '123',
      'admin': false
    }
  ];

  var backendPosts = [
    {
      'title': 'Post title 1',
      'content': 'Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesque sapien. Cras elementum. Nulla pulvinar eleifend sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta. Vivamus porttitor turpis ac leo.',
      'image': 'http://placehold.it/230x231',
      'categories': [
        'New Hires', 'Wellness'
      ],
      'show': true,
      'important': false
    },
    {
      'title': 'Post title 2',
      'content': 'Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesque sapien. Cras elementum. Nulla pulvinar eleifend sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta. Vivamus porttitor turpis ac leo',
      'image': 'http://placehold.it/230x232',
      'categories': [
        'News', 'Referals', 'Benefits'
      ],
      'show': true,
      'important': false
    },
    {
      'title': 'Post title 3',
      'content': 'Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesque sapien. Cras elementum. Nulla pulvinar eleifend sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta. Vivamus porttitor turpis ac leo.',
      'image': 'http://placehold.it/230x233',
      'categories': [
        'New Hires', 'Benefits'
      ],
      'show': true,
      'important': false
    },
    {
      'title': 'Post title 4',
      'content': 'Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesque sapien. Cras elementum. Nulla pulvinar eleifend sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta. Vivamus porttitor turpis ac leo.',
      'image': 'http://placehold.it/230x234',
      'categories': [
        'Events'
      ],
      'show': true,
      'important': false
    },
    {
      'title': 'Post title 5',
      'content': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio',
      'image': 'http://placehold.it/230x235s',
      'categories': [
        'Wellness', 'News'
      ],
      'show': true,
      'important': true
    },
    {
      'title': 'Post title 6',
      'content': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio',
      'image': 'http://placehold.it/230x236',
      'categories': [
        'Referals'
      ],
      'show': true,
      'important': true
    },
    {
      'title': 'Post title 7',
      'content': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio',
      'image': 'http://placehold.it/230x237',
      'categories': [
        'Benefits'
      ],
      'show': true,
      'important': true
    },
    {
      'title': 'Post title 8',
      'content': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio',
      'image': 'http://placehold.it/230x238',
      'categories': [
        'Events'
      ],
      'show': true,
      'important': true
    }
  ];*/
});
