<template>
   <div>
    <!-- Nav bar -->  
    
      <div>
        <h1 class="center">Show</h1>
      </div>
  <!-- Navbar content -->

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
            <th scope="col">ประเภทสินค้่า</th>
      <th scope="col">ชื่อสินค้า</th>
      <th scope="col">ราคาสินค้า</th>
      <th scope="col">สีของสินค้า</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>โทรศัพท์</td>
      <td> iphone 13 Pro</td>
      <td>32000</td>
      <td>เเดง</td>
      <td><button type="button" class="btn btn-primary">Edit</button></td>
     <td><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    <th scope="row">2</th>
      <td>โทรศัพท์</td>
      <td> iphone 11 Pro</td>
      <td>24350</td>
      <td>เงิน</td>
      <td><button type="button" class="btn btn-primary">Edit</button></td>
     <td><button type="button" class="btn btn-danger">Delete</button></td>
  </tbody>
</table>
    <!-- Router view -->
  </div>
</template>

<script>

export default {
    
}
</script>