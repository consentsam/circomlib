# `EdDSAMiMCSpongeVerifier()`

## Description

This template verifies an [EdDSA](../) signature `S` on a message `msg` on Baby Jubjub elliptic curve using [MiMC-Sponge](../../hash_functions/mimc_sponge) hash function.

## Schema

```
               _____________________________     
enabled ----> |                             |
     Ax ----> |                             |
     Ay ----> |                             |
      S ----> |  EdDSAMiMCSpongeVerifier()  |
    R8x ----> |                             |
    R8y ----> |                             |
      M ----> |_____________________________|
```

## Dependencies

```
include "../../../basics/comparators/comp_constant/comp_constant.circom";
include "../../../basics/comparators/is_zero/is_zero.circom";
include "../../../basics/comparators/force_equal_if_enabled/force_equal_if_enabled.circom";
include "../../../basics/bitify/num2bits/num2bits.circom";
include "../../../basics/bitify/num2bits_strict/num2bits_strict.circom";
include "../../baby_jubjub/baby_edwards_add/baby_edwards_add.circom";
include "../../baby_jubjub/baby_edwards_dbl/baby_edwards_dbl.circom";
include "../../baby_jubjub/baby_edwards_scalar_mul_any/baby_edwards_scalar_mul_any.circom";
include "../../baby_jubjub/baby_edwards_scalar_mul_fix/baby_edwards_scalar_mul_fix.circom";
include "../../hash_functions/mimc_sponge/mimc_sponge.circom";
```

## Expected Inputs

| Input         | Type                              | Description      |
| ------------- | -------------                     | -------------    | 
| `enabled`     | ...                               |  Message    |
| `Ax`          | ... encoding of the point, etc.   |  A = [s]B with B generation of large prime subgroup of E (put ref) here  |
| `Ay`          | ...                               |  ...   |
| `S`           | ...                               |  EdDSA signature    |
| `R8x`         | ...                               |  EdDSA signature    |
| `R8y`         | ...                               |  EdDSA signature    |
| `M`           | ...                               |  EdDSA signature    |

## Outputs

No output!!

## Benchmarks 

## Test