<template>
  <div id="footer">
    <div class="container-footer">
      <b-row>
        <b-col sm="4" cols="12" class="col email">
          <span class="label medium white lighten">info@eco-cabins.com</span>
        </b-col>
        <b-col sm="4" cols="12" class="col logo text-center">
          <img src="images/logo.png" />
        </b-col>
        <b-col sm="4" cols="12" class="col links">
          <span class="label medium white lighten footer-link">
            Cookies
          </span>
          <br />
          <span class="label medium white lighten footer-link pl-sm-4">
            Privacybeleid
          </span>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer {
  background-color: #222f33;
}

br {
  display: block;
}

.col {
  background-color: #222f33;
  height: auto;
  line-height: 34px;
}

.col.email {
  padding-top: 10px;
  order: 1;
  text-align: center;
}

.col.links {
  order: 2;
  text-align: center;
}

.col.logo {
  order: 3;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

.container-footer {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  br {
    display: none;
  }

  .col {
    height: 92px;
    line-height: 92px;
  }

  .col.email {
    text-align: left;
    padding-top: 0;
  }

  .col.logo {
    order: 2;
    padding-top: 0;
    padding-bottom: 0;
  }

  .col.links {
    order: 3;
    text-align: right;
  }

  .container-footer {
    max-width: 526px;
  }
}

@media (min-width: 768px) {
  .container-footer {
    max-width: 738px;
  }
}

@media (min-width: 992px) {
  .container-footer {
    max-width: 942px;
  }
}

@media (min-width: 1200px) {
  .container-footer {
    max-width: 1150px;
  }
}
</style>
