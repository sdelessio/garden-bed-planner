<template>
  <div class="row">
    <div class="col-md-5 col-lg-3 col-xl-3">
      <img
        class="img-fluid w-100"
        v-bind:src="plant.img"
        :alt="plant.title"
      />
    </div>
    <div class="col-md-7 col-lg-9 col-xl-9">
      <div>
        <h2>{{ plant.title }}</h2>
        <p><b>Space required: </b>{{plant.space}}</p>
      </div>
      <div style="display: flex; justify-content: flex-start;">
      <div class="input-group plus-minus-input">
        <!-- <span class="input-group-btn">
          <button
            class="btn btn-default btn-number minus-button"
            :id="plant.id + '-minus-button'"
            v-on:click="plant.quantity--"
          >
            <span class="fa fa-minus"></span>
          </button>
        </span> -->
        <!-- <span
          type="number"
          class="form-control input-number"
          :id="plant.id + '-input-number'"
          v-if="plant.quantity <= 0"
          min="0"
        >
          0
        </span> -->
        <input type="number" class="form-control input-number" :id="plant.id + '-input-number'"
        min="0" value="0">
        <!-- <span
          type="number"
          class="form-control input-number"
          :id="plant.id + '-input-number'"
          min="0"
          v-if="plant.quantity > 0"
        >
          {{plant.quantity}}
        </span> -->
        <!-- <span class="input-group-btn">
          <button
            class="btn btn-default btn-number plus-button"
            :id="plant.id + '-plus-button'"
            v-on:click="plant.quantity++"
          >
            <span class="fa fa-plus"></span>
          </button>
        </span> -->
      </div>
      <button class="btn btn-outline-success add-to-inventory-button" :id="plant.id + '-add-to-inventory-button'" style="margin-left: 5px;">Add to inventory</button>
    </div>
    <div style="display:flex; justify-content: flex-end;">
      <p style="margin-bottom: 0; margin-top: 10px;"><b>Total in inventory:</b> <span class="inventory-total" :id="plant.id + '-inventory-total'">{{total}}</span></p>
    </div>
    </div>
  </div>
</template>

<script>
export default{
  props: ["plants"],
}
</script>
