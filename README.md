# Django Admin Black

Modern template for **Django admin interface** coded on top of Black Dashboard (free version) from **Creative-Tim**

> Originally coded by [Iman Karimi](https://github.com/imankarimi), actively versioned and supported by [AppSeed](https://appseed.us/) via Github (issues tracker) and [Discord](https://discord.gg/fZC6hup) - 24/7 LIVE Service.

<br>

**Links & Resources**

- [Django Black Dashboard](https://appseed.us/admin-dashboards/django-dashboard-black) - Open-source starter that uses the same UI Kit
- [Django Black Dashboard - DEMO](https://django-dashboard-black.appseed.us/login/) - LIVE Deployment

<br />

## Why Django Admin Black?

- It's amazing
- Easy installation
- Dark mode

<br />

![Django Admin Black - Template project for Django provided by AppSeed.](https://raw.githubusercontent.com/app-generator/django-admin-black/main/media/django-admin-black-intro.gif)

<br>

## Installation

```bash
$ pip install git+https://github.com/andre23arruda/django-admin-black.git
$ # or
$ easy_install git+https://github.com/andre23arruda/django-admin-black.git
```

* Add 'admin_black' application to the INSTALLED_APPS setting of your Django project settings.py file (note it should be before 'django.contrib.admin'):

```python
    INSTALLED_APPS = (
        ...
        'admin_black.apps.AdminBlackConfig',
        'django.contrib.admin',
    )
```


* All programs you add in **INSTALLED_APPS** should look like this: **APP_NAME.apps.APP_NAMEConfig**.

> In this feature, we considered that each App can have its own icon, so we ask users to use this feature according to the method. Also in apps.py of each program according to the example add the icon field in the corresponding class. You can go **[here](https://django-dashboard-black.appseed.us/ui-icons.html)** to use more icons


```python

    from django.apps import AppConfig

    class APP_NAMEConfig(AppConfig):
        name = 'APP_NAME'
        icon = 'ICON_CLASS'  # for example: icon = 'tim-icons icon-atom'
```


## Screenshots

![Django Admin Black - Main Django Dashboard screen.](https://raw.githubusercontent.com/app-generator/django-admin-black/main/media/django-admin-black-screen.png)

<br>

![Django Admin Black - Add user screen.](https://raw.githubusercontent.com/app-generator/django-admin-black/main/media/django-admin-black-screen-add-user.png)

<br>

![Django Admin Black - Edit user permissions.](https://raw.githubusercontent.com/app-generator/django-admin-black/main/media/django-admin-black-screen-edit-permissions.png)

<br>

---
**Django Admin Black** - Provided by **[AppSeed](https://appseed.us/)**
