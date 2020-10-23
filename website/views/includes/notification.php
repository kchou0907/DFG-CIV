<?php if ($this->session->flashdata('success')): ?>
    <div class="alert alert-success">
        <?= $this->session->flashdata('success'); ?>
    </div>
<?php endif; ?>


<?php if ($this->session->flashdata('error')): ?>
    <div class="alert alert-danger">
        <?= $this->session->flashdata('error'); ?>
    </div>
<?php endif; ?>


<?php if (isset($error_upload)): ?>
    <div class="alert alert-danger">
        <?= $error_upload ?>
    </div>
<?php endif; ?>