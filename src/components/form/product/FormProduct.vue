<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-container fluid>
          <v-row>
            <v-col :cols="6">
              <v-text-field
                v-model="formModel.name"
                outlined
                label="name"
                name="name"
                placeholder="name"
              ></v-text-field>
            </v-col>
            <v-col :cols="6">
              <v-text-field
                v-model="formModel.slug"
                readonly
                label="slug"
                outlined
                placeholder="slug"
              ></v-text-field>
            </v-col>
            <v-col :cols="12">
              <v-text-field
                v-model="formModel.reference_url"
                readonly
                outlined
                label="Reference"
                placeholder="Reference"
              ></v-text-field>
            </v-col>
            <v-col :cols="12">
              <v-tree-select
                :items="getProductCategories"
                :selected-items="formModel.categories"
                @change="handleCategoriesChange"
              />
            </v-col>
            <v-col :cols="12">
              <v-textarea
                v-model="formModel.description"
                outlined
                placeholder="Description"
                label="Description"
              />
            </v-col>
            <v-col :cols="12">
              <label for="">Specs</label>
              <v-jodit v-model="formModel.specs" />
              <!-- <v-textarea
                outlined
                :rows="10"
                id="editor"
                label="Specs"
                placeholder="Specs"
                v-model="formModel.specs"
              /> -->
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions class="py-3">
      <v-spacer></v-spacer>
      <v-btn @click="handleSubmit()" :loading="loading" tile color="primary">
        save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import VTreeSelect from '@/components/tree-select/VTreeSelect'
import { mapGetters } from 'vuex'
import VJodit from '@/components/jodit'
export default {
  name: 'ProductGeneral',
  components: {
    VTreeSelect,
    VJodit
  },
  props: {
    item: Object
  },
  data() {
    return {
      loading: false,
      items: [
        {
          id: 1,
          name: 'Root',
          children: [
            { id: 2, name: 'Child #1' },
            { id: 3, name: 'Child #2' },
            {
              id: 4,
              name: 'Child #3',
              children: [
                { id: 5, name: 'Grandchild #1' },
                { id: 6, name: 'Grandchild #2' }
              ]
            }
          ]
        }
      ],
      formModel: {
        name: null,
        description: null,
        slug: null,
        reference_url: null,
        specs: '',
        categories: []
      }
    }
  },
  computed: {
    ...mapGetters(['getProductCategories']),
    formTitle() {
      return this.item ? 'Edit Product' : 'Create Product'
    }
  },
  watch: {
    item: {
      handler(item) {
        this.assignModel(item)
      },
      immediate: true
    }
  },
  methods: {
    assignModel(data) {
      if (data) {
        this.formModel = {
          id: data.id,
          name: data.name,
          description: data.description,
          slug: data.slug,
          reference_url: data.reference_url,
          specs: data.specs,
          categories: data.categories
        }
      } else {
        this.formModel = {
          name: null,
          description: null,
          slug: null,
          reference_url: null,
          specs: '',
          categories: []
        }
      }
    },
    handleSubmit() {
      this.loading = true

      if (this.formModel.id) {
        this.$store
          .dispatch('updateProduct', {
            id: this.formModel.id,
            data: this.formModel
          })
          .then(() => {
            this.loading = false
          })
      } else {
        this.$store.dispatch('createProduct', this.formModel).then(() => {
          this.loading = false
        })
      }
    },
    handleCategoriesChange(categories) {
      this.formModel.categories = categories
      this.formModel.category_ids = categories.map((item) => {
        return item.id
      })
    }
  },
  created() {
    this.$store.dispatch('fetchProductCategoryTree')
  }
}
</script>

<style></style>