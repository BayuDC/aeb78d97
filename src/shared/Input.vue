<script>
import { nanoid } from 'nanoid';

export default {
    name: 'Input',
    props: {
        label: { type: String, required: true },
        value: { type: String, default: '' },
        required: { type: Boolean, default: false },
        modelValue: { type: String, default: '' },
    },

    data() {
        return {
            id: nanoid(),
        };
    },
    mounted() {},
};
</script>

<template>
    <div class="input-field">
        <label :for="id">{{ label }} <span v-if="required">*</span></label>
        <input
            type="text"
            :id="id"
            autocomplete="off"
            :required="required"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <p>{{ error }}</p>
    </div>
</template>

<style lang="scss">
@import '../styles/variable';

.input-field {
    margin-bottom: 10px;

    & > * {
        display: block;
    }
    label {
        font-size: 16px;
        font-weight: 500;

        span {
            color: $red;
        }
    }
    input {
        margin: 5px 0;
        width: 100%;
        height: 40px;
        border: 1px solid $black;
        outline: none;
        font-family: $fira-sans;
        font-size: 16px;
        padding: 0 10px;
        box-sizing: border-box;
    }
    p {
        color: $red;
        font-size: 14px;
        text-align: right;
        min-height: 16px;
    }
}
</style>
