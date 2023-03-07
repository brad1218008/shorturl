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
          v-model="url"
          rounded>
        </b-input>
      </b-field>
    </div>
    <div class="buttons is-centered">
      <b-button
        icon-left="swap-vertical-bold"
        @click="generateShortUrl">
        Generate Url
      </b-button>
    </div>
    <div class="buttons is-centered">
      <b-button
        icon-left="content-paste"
        @click="pasteAndGenerate">
        Paste And Generate Url
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
          v-model="shortUrl"
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
  data() {
    return {
      url: '',
      shortUrl: ''
    }
  },
  methods: {
    clearUrl() {
      this.url = '';
    },
    async copyShortUrl() {
      await navigator.clipboard.writeText(this.shortUrl);
    },
    generateShortUrl() {
      this.shortUrl = 'https://test';
    },
    async pasteAndGenerate() {
      this.url = await navigator.clipboard.readText();
      this.generateShortUrl();
    }
  }
}
</script>
