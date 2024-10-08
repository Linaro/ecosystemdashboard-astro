---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: libraries

meta:
  keywords: "LAPACK"

project:
  title: "LAPACK"
  type: "Fortran"
  url: "LAPACK"
  project_official_url: "https://www.netlib.org/lapack/"
  logo: "/assets/projectLogos/lapack.png"
  overview: "LAPACK is written in Fortran 90 and provides routines for solving systems of simultaneous linear equations, least-squares solutions of linear systems of equations, eigenvalue problems, and singular value problems. The associated matrix factorizations (LU, Cholesky, QR, SVD, Schur, generalized Schur) are also provided, as are related computations such as reordering of the Schur factorizations and estimating condition numbers. Dense and banded matrices are handled, but not general sparse matrices. In all areas, similar functionality is provided for real and complex matrices, in both single and double precision."

supported_releases:
  - release:
    version: "3.11.0"
    url: "https://github.com/Reference-LAPACK/lapack/archive/refs/tags/v3.11.tar.gz"
  - release:
    version: "3.10.1"
    url: "https://github.com/Reference-LAPACK/lapack/archive/refs/tags/v3.10.1.tar.gz"
  - release:
    version: "3.10.0"
    url: "https://github.com/Reference-LAPACK/lapack/archive/refs/tags/v3.10.0.tar.gz"
  - release:
    version: "3.9.1"
    url: "https://github.com/Reference-LAPACK/lapack/archive/refs/tags/v3.9.1.tar.gz"

---

<p>LAPACK</p>
