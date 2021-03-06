import { AuthLayout, DefaultLayout, RouterWrapper } from '@/components/layouts'
export const publicRoute = [
  {
    path: '*',
    component: () => import('@/views/error/NotFound.vue')
  },
  {
    path: '/auth',
    component: AuthLayout,
    meta: {
      title: 'Login'
    },
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',

        meta: {
          title: 'Login'
        },
        component: () => import('@/views/auth/Login.vue')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found'
    },
    component: () => import('@/views/error/NotFound.vue')
  },

  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error'
    },
    component: () => import('@/views/error/Error.vue')
  }
]

export const protectedRoute = [
  {
    path: '/',
    component: DefaultLayout,
    meta: {
      title: 'Home',
      group: 'apps',
      icon: '',
      hiddenInMenu: true
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
          title: 'Dashboard',
          hiddenInMenu: false,
          icon: 'mdi-monitor-dashboard'
        }
      },

      {
        path: '/mall',
        name: 'mall.index',
        meta: {
          group: 'mall',
          title: 'Mall',
          hiddenInMenu: false,
          icon: 'mdi-store'
        },
        component: RouterWrapper,
        redirect: {
          path: '/mall/product'
        },
        children: [
          // product
          {
            path: '/mall/product',
            name: 'mall.product',
            meta: {
              title: 'Product',
              hiddenInMenu: false,
              icon: 'mdi-store'
            },
            component: RouterWrapper,
            redirect: {
              path: '/mall/product/list'
            },
            children: [
              {
                path: '/mall/product/list',
                name: 'mall.product.list',
                component: () => import('@/views/mall/ProductList.vue'),
                meta: {
                  title: 'Product List',
                  hiddenInMenu: false,
                  icon: 'mdi-basket'
                }
              },
              {
                path: '/mall/product/create',
                name: 'mall.product.create',
                props: true,
                component: () => import('@/views/mall/ProductItem.vue'),
                meta: {
                  title: 'Create Product',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              },
              {
                path: '/mall/product/item/:id',
                name: 'mall.product.item',
                props: true,
                component: () => import('@/views/mall/ProductItem.vue'),
                meta: {
                  title: 'Edit Product',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              }
            ]
          },
          {
            path: '/mall/quote',
            name: 'mall.quote',
            component: RouterWrapper,
            redirect: {
              path: '/mall/quote/list'
            },
            meta: {
              title: 'Quote',
              hiddenInMenu: false,
              icon: 'mdi-quora'
            },
            children: [
              {
                path: '/mall/quote/list',
                name: 'mall.quote.list',
                component: () => import('@/views/mall/QuoteList.vue'),
                meta: {
                  title: 'Quote List',
                  hiddenInMenu: false,
                  icon: 'mdi-quora'
                }
              },
              {
                path: '/mall/quote/item/:id',
                name: 'mall.quote.update',
                props: true,
                component: () => import('@/views/mall/QuoteItem.vue'),
                meta: {
                  title: 'Update quote',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              }
            ]
          },
          //vendor
          {
            path: '/mall/vendor',
            name: 'mall.vendor',
            meta: {
              title: 'Vendor',
              hiddenInMenu: false,
              icon: 'mdi-alpha-v-circle'
            },
            component: RouterWrapper,
            redirect: {
              path: '/mall/vendor/list'
            },
            children: [
              {
                path: '/mall/vendor/list',
                name: 'mall.vendor.list',
                component: () => import('@/views/mall/VendorList.vue'),
                meta: {
                  title: 'Vendor List',
                  hiddenInMenu: false,
                  icon: 'mdi-basket'
                }
              },
              {
                path: '/mall/vendor/create',
                name: 'mall.vendor.create',
                props: true,
                component: () => import('@/views/mall/VendorItem.vue'),
                meta: {
                  title: 'Create vendor',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              },
              {
                path: '/mall/vendor/item/:id',
                name: 'mall.vendor.update',
                props: true,
                component: () => import('@/views/mall/VendorItem.vue'),
                meta: {
                  title: 'Update vendor',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              }
            ]
          },

          //category
          {
            path: '/mall/category',
            name: 'mall.category',
            meta: {
              title: 'Category',
              hiddenInMenu: false,
              icon: 'mdi-buffer'
            },
            component: RouterWrapper,
            redirect: {
              path: '/mall/category/list'
            },
            children: [
              {
                path: '/mall/category/list',
                name: 'mall.category.list',
                component: () => import('@/views/mall/CategoryList.vue'),
                meta: {
                  title: 'Category List',
                  hiddenInMenu: false,
                  icon: 'mdi-buffer'
                }
              },
              {
                path: '/mall/category/create',
                name: 'mall.category.create',
                props: true,
                component: () => import('@/views/mall/CategoryItem.vue'),
                meta: {
                  title: 'Create  Category',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              },
              {
                path: '/mall/category/item/:id',
                name: 'mall.category.item',
                props: true,
                component: () => import('@/views/mall/CategoryItem.vue'),
                meta: {
                  title: 'Edit  Category',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              }
            ]
          },
          // property
          {
            path: '/mall/property',
            name: 'mall.property',
            meta: {
              title: 'Property',
              hiddenInMenu: false,
              icon: 'mdi-filter-variant'
            },
            component: RouterWrapper,
            redirect: {
              path: '/mall/property/list'
            },
            children: [
              {
                path: '/mall/property/list',
                name: 'mall.property.list',
                component: () => import('@/views/mall/PropertyList.vue'),
                meta: {
                  title: 'Property List',
                  hiddenInMenu: false,
                  icon: 'mdi-filter-variant'
                }
              },
              {
                path: '/mall/property/create',
                name: 'mall.property.create',
                props: true,
                component: () => import('@/views/mall/PropertyItem.vue'),
                meta: {
                  title: 'Create Property',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              },
              {
                path: '/mall/property/item/:id',
                name: 'mall.property.item',
                props: true,
                component: () => import('@/views/mall/PropertyItem.vue'),
                meta: {
                  title: 'Edit Property',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              }
            ]
          }
        ]
      },
      {
        path: '/cms',
        name: 'cms.index',
        meta: {
          group: 'cms',
          title: 'CMS',
          hiddenInMenu: false,
          icon: 'mdi-newspaper'
        },
        component: RouterWrapper,
        redirect: {
          path: '/cms/news'
        },
        children: [
          {
            path: '/cms/news',
            name: 'cms.news',
            component: RouterWrapper,
            redirect: {
              path: '/cms/news/list'
            },
            meta: {
              title: 'News',
              hiddenInMenu: false,
              icon: 'mdi-post'
            },
            children: [
              {
                path: '/cms/news/list',
                name: 'cms.news.list',
                component: () => import('@/views/cms/NewsList.vue'),
                meta: {
                  title: 'News',
                  hiddenInMenu: false,
                  icon: 'mdi-post'
                }
              },
              {
                path: '/cms/news/item/:id',
                name: 'cms.news.edit',
                props: true,
                component: () => import('@/views/cms/NewsItem.vue'),
                meta: {
                  title: 'Edit News',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              },
              {
                path: '/cms/news/create',
                name: 'cms.news.create',
                props: true,
                component: () => import('@/views/cms/NewsItem.vue'),
                meta: {
                  title: 'Create News',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              }
            ]
          },
          // tags
          {
            path: '/cms/tags',
            name: 'cms.tags',
            component: RouterWrapper,
            redirect: {
              path: '/cms/tags/list'
            },
            meta: {
              title: 'Tags',
              hiddenInMenu: false,
              icon: 'mdi-tag'
            },
            children: [
              {
                path: '/cms/tags/list',
                name: 'cms.tags.list',
                component: () => import('@/views/cms/TagList.vue'),
                meta: {
                  title: 'Tag List',
                  hiddenInMenu: false,
                  icon: 'mdi-tag'
                }
              },
              {
                path: '/cms/tags/create',
                name: 'cms.tags.create',
                props: true,
                component: () => import('@/views/cms/TagItem.vue'),
                meta: {
                  title: 'Create Tag',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              },
              {
                path: '/cms/tags/item/:id',
                name: 'cms.tags.edit',
                props: true,
                component: () => import('@/views/cms/TagItem.vue'),
                meta: {
                  title: 'Edit Tag',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              }
            ]
          },
          //categories

          {
            path: '/cms/categories',
            name: 'cms.categories',
            component: RouterWrapper,
            redirect: {
              path: '/cms/categories/list'
            },
            meta: {
              title: 'Category',
              hiddenInMenu: false,
              icon: 'mdi-buffer'
            },
            children: [
              {
                path: '/cms/categories/list',
                name: 'cms.categories.list',
                component: () => import('@/views/cms/CategoryList.vue'),
                meta: {
                  title: 'Category List',
                  hiddenInMenu: false,
                  icon: 'mdi-tag'
                }
              },
              {
                path: '/cms/categories/create',
                name: 'cms.categories.create',
                props: true,
                component: () => import('@/views/cms/CategoryItem.vue'),
                meta: {
                  title: 'Create Category',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              },
              {
                path: '/cms/categories/item/:id',
                name: 'cms.categories.edit',
                props: true,
                component: () => import('@/views/cms/CategoryItem.vue'),
                meta: {
                  title: 'Edit Category',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              }
            ]
          },

          //slider
          {
            path: '/cms/slider',
            name: 'cms.slider',
            component: RouterWrapper,
            redirect: {
              path: '/cms/slider/list'
            },
            meta: {
              title: 'Slider',
              hiddenInMenu: false,
              icon: 'mdi-image-multiple'
            },
            children: [
              {
                path: '/cms/slider/list',
                name: 'cms.slider.list',
                component: () => import('@/views/cms/SliderList.vue'),
                meta: {
                  title: 'Slider List',
                  hiddenInMenu: false,
                  icon: 'mdi-image-multiple'
                }
              },
              {
                path: '/cms/slider/create',
                name: 'cms.slider.create',
                props: true,
                component: () => import('@/views/cms/SliderItem.vue'),
                meta: {
                  title: 'Create Tag',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              },
              {
                path: '/cms/slider/item/:id',
                name: 'cms.slider.edit',
                props: true,
                component: () => import('@/views/cms/SliderItem.vue'),
                meta: {
                  title: 'Edit Tag',
                  hiddenInMenu: true,
                  icon: 'mdi-view'
                }
              }
            ]
          }
        ]
      },
      {
        path: '/media',
        name: 'media.index',
        meta: {
          group: 'media',
          title: 'Media',
          hiddenInMenu: false,
          icon: 'mdi-image'
        },
        component: () => import('@/views/Media.vue')
      },
      {
        path: '/setting',
        name: 'setting.index',
        meta: {
          group: 'setting',
          title: 'Setting',
          hiddenInMenu: false,
          icon: 'mdi-cogs'
        },
        component: () => import('@/views/Setting.vue')
      },
      {
        path: '/acl',
        name: 'acl.index',
        meta: {
          group: 'acl',
          title: 'ACL',
          hiddenInMenu: false,
          icon: 'mdi-shield-account'
        },
        component: RouterWrapper,
        redirect: {
          path: '/acl/user'
        },
        children: [
          {
            path: '/acl/user',
            name: 'acl.user',
            component: () => import('@/views/acl/UserList.vue'),
            meta: {
              title: 'Users',
              hiddenInMenu: false,
              icon: 'mdi-account'
            }
          },
          {
            path: '/acl/user/create',
            name: 'acl.user.create',
            component: () => import('@/views/acl/UserItem.vue'),
            meta: {
              title: 'Create User',
              hiddenInMenu: true,
              icon: 'mdi-view'
            }
          },
          {
            path: '/acl/user/item/:id',
            name: 'cms.user.edit',
            component: () => import('@/views/acl/UserItem.vue'),
            props: true,
            meta: {
              title: 'Edit User',
              hiddenInMenu: true,
              icon: 'mdi-view'
            }
          },
          {
            path: '/acl/role',
            name: 'acl.role',
            component: () => import('@/views/acl/RoleList.vue'),
            meta: {
              title: 'Roles',
              hiddenInMenu: false,
              icon: 'mdi-account-group'
            }
          },
          {
            path: '/acl/role/create',
            name: 'acl.role.create',
            component: () => import('@/views/acl/RoleItem.vue'),
            meta: {
              title: 'Create Role',
              hiddenInMenu: true,
              icon: 'mdi-view'
            }
          },
          {
            path: '/acl/role/item/:id',
            name: 'cms.role.edit',
            component: () => import('@/views/acl/RoleItem.vue'),
            props: true,
            meta: {
              title: 'Edit Role',
              hiddenInMenu: true,
              icon: 'mdi-view'
            }
          }
        ]
      },
      {
        path: '/403',
        name: 'Forbidden',
        meta: {
          title: 'Access Denied',
          hiddenInMenu: true
        },
        component: () => import('@/views/error/Deny.vue')
      }
    ]
  }
]
