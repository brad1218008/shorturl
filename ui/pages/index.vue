<template>
  <section class="section">
    <div class="block">
      <b-field>
        <b-input
          placeholder="paste url here ..."
          size="is-medium"
          icon="link"
          icon-right="close-circle"
          icon-right-clickable
          @icon-right-click="clearUrl"
          rounded>
        </b-input>
      </b-field>
    </div>
    <div class="buttons is-centered">
      <b-button icon-left="zoom-in">
        Generate Url
      </b-button>
    </div>
    <div class="buttons is-centered">
      <b-button icon-left="content-paste">
        Paste From Clipboard And Generate Url
      </b-button>
    </div>
    <div class="block">
      <b-field>
        <b-input
          size="is-medium"
          readonly
          icon-right="content-copy"
          icon-right-clickable
          @icon-right-click="copyShortUrl"
          rounded>
        </b-input>
      </b-field>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'IndexPage',
  components: {
    Card
  },
  data: {
    url: '',
    shortUrl: ''
  },
  methods: {
    clearUrl() {
      this.url = '';
    },
    copyShortUrl() {
      this.email = '';
      alert('Email cleared!')
    }
  }
}
</script>
