from pyramid.view import view_config


@view_config(route_name='home', renderer='pyramid_scaffold:templates/mytemplate.jinja2')
def my_view(request):
    return {'project': 'Pyramid Scaffold'}
