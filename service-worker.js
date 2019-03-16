/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9c34c446fb6a01e56a64ab702f73f2b7"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a19fbb31.js",
    "revision": "ecb310902e2664aa4d26d5806e32557f"
  },
  {
    "url": "assets/js/11.137c02b8.js",
    "revision": "3e459fc0ef78c9dbc76a8b246961d02e"
  },
  {
    "url": "assets/js/12.e03587ff.js",
    "revision": "a3d92c6ed204c2a47975d220e6ef9f3f"
  },
  {
    "url": "assets/js/13.f9bb2bd4.js",
    "revision": "d661fc43f42543f2fe051b0d7577da25"
  },
  {
    "url": "assets/js/14.0178896c.js",
    "revision": "95d9a6bf83418ce40a013ab199c5d032"
  },
  {
    "url": "assets/js/15.b88558c9.js",
    "revision": "5eaf242aa1915c63feb6ad59ac5bb2b9"
  },
  {
    "url": "assets/js/16.d74802ae.js",
    "revision": "6eaea9cdffcd23449087023f4d3821d7"
  },
  {
    "url": "assets/js/17.53bc2c33.js",
    "revision": "5b606eb7d64dd12eff17a30260d613b3"
  },
  {
    "url": "assets/js/18.07cc9122.js",
    "revision": "cb3078b9e5c24e4b1fcbabe46e491787"
  },
  {
    "url": "assets/js/19.fa8938a8.js",
    "revision": "f6264a7ac6eae41d86d82237ec1026af"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.95e51fe9.js",
    "revision": "5522721cf58c1562ff42559d48849536"
  },
  {
    "url": "assets/js/21.35d0661a.js",
    "revision": "e1709c6bb3240f704be93ad0e322ebea"
  },
  {
    "url": "assets/js/22.f7ee5b45.js",
    "revision": "4a393578461d7ec6bff33b193ea954f6"
  },
  {
    "url": "assets/js/23.e6474d5c.js",
    "revision": "9838ace950894467d7bc641e1d9079e5"
  },
  {
    "url": "assets/js/24.fcab3a44.js",
    "revision": "091ededa6c04dd799c5ff7e44aef1b1f"
  },
  {
    "url": "assets/js/25.730c5e9c.js",
    "revision": "b37b1d80121ef221b207827a3fc19f88"
  },
  {
    "url": "assets/js/26.be1b030d.js",
    "revision": "7353d2131e7eddc5905790644a914711"
  },
  {
    "url": "assets/js/27.42ca0fbe.js",
    "revision": "2393d56324331e268e3541ac7704f728"
  },
  {
    "url": "assets/js/28.32d50c9e.js",
    "revision": "e9549d094bcf151979c9869b86d932b5"
  },
  {
    "url": "assets/js/29.93ee8157.js",
    "revision": "0ca031b5096272d81239d233da045188"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.04d81289.js",
    "revision": "5eb3e32fd4a44149bee30a2ccfd37e3d"
  },
  {
    "url": "assets/js/31.1b380e5a.js",
    "revision": "5d88588a49074482c8b208e0f874530c"
  },
  {
    "url": "assets/js/32.48c89bd7.js",
    "revision": "fcead4430142ff28ccee7327ca9c00e7"
  },
  {
    "url": "assets/js/33.44fa0da4.js",
    "revision": "bcb13d7ff58ab9ce7ae3ab57ce6338cc"
  },
  {
    "url": "assets/js/34.a1635889.js",
    "revision": "694dce9187701109116b9d6cc973eed6"
  },
  {
    "url": "assets/js/35.8de7fb6c.js",
    "revision": "52410b9f0331607619b15b40f3b71289"
  },
  {
    "url": "assets/js/36.9693caa1.js",
    "revision": "2375e9ef1c3ad13deeb343bb953d316b"
  },
  {
    "url": "assets/js/37.a98d8800.js",
    "revision": "8767c0c15cedfeb232b5781445712210"
  },
  {
    "url": "assets/js/38.281545cf.js",
    "revision": "15a1820920fe3c54983d8a932aa1d46e"
  },
  {
    "url": "assets/js/39.3d5e3c02.js",
    "revision": "815e8ca1aa8c8b225f262edaebc5ea98"
  },
  {
    "url": "assets/js/4.b3c37dd0.js",
    "revision": "d36c844c80973b0c3d208b22f3bdc49c"
  },
  {
    "url": "assets/js/40.f96def71.js",
    "revision": "0e1baf753b5dc513a252e0db31b9dbca"
  },
  {
    "url": "assets/js/41.2c6845fa.js",
    "revision": "5fd679d524bafc7ff349e6ffe143e7a0"
  },
  {
    "url": "assets/js/42.712b300b.js",
    "revision": "356b5bf029988a80f17777ad8b8b8e65"
  },
  {
    "url": "assets/js/43.56371b02.js",
    "revision": "ae2533882426b7aaa2376b1ead2825f7"
  },
  {
    "url": "assets/js/44.78474a9d.js",
    "revision": "54b39e74cac9b839f5ceb193fcf44ebb"
  },
  {
    "url": "assets/js/45.6a1df3c3.js",
    "revision": "7693d5de5e27e30d524d248b784f2df6"
  },
  {
    "url": "assets/js/46.d01753f7.js",
    "revision": "f5c79945e8191e5d2bbad3c1ace17b6d"
  },
  {
    "url": "assets/js/47.89333716.js",
    "revision": "a3d45db03864f6df04ff6007a618ed46"
  },
  {
    "url": "assets/js/48.a3a3f7f9.js",
    "revision": "4b70bd06e54dc864c8cc6f880ec10bc0"
  },
  {
    "url": "assets/js/49.5cac1a98.js",
    "revision": "c3a95a1ddac118da76c1c9e2d2c9f26e"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.74de1f25.js",
    "revision": "7247f766ac98269f630729a790fef171"
  },
  {
    "url": "assets/js/51.3baeee88.js",
    "revision": "6be0b7eeb8d67013eeb9d6ae90ab8dd6"
  },
  {
    "url": "assets/js/52.ccb6769a.js",
    "revision": "55c9b2208873357dac2c40eb5201bb21"
  },
  {
    "url": "assets/js/53.3b150dae.js",
    "revision": "d1ff8e9c0a40884349394159ff201eb5"
  },
  {
    "url": "assets/js/54.f5ab2436.js",
    "revision": "5bed14e17289a55a103f9e745dda2c9e"
  },
  {
    "url": "assets/js/55.e6bcc881.js",
    "revision": "37f618b98111925d38cf4eeacb62207f"
  },
  {
    "url": "assets/js/56.63531842.js",
    "revision": "ada963edea2dcfc2dd91dfd8aee353aa"
  },
  {
    "url": "assets/js/57.999f1320.js",
    "revision": "f4e23c97f17312bf41ead1134f26dfec"
  },
  {
    "url": "assets/js/58.bbede20d.js",
    "revision": "51f888b4fd5c5cb91650e895483957d3"
  },
  {
    "url": "assets/js/59.71383476.js",
    "revision": "941464f87d7d1f275e44e2328acc67ee"
  },
  {
    "url": "assets/js/6.dbaee8a1.js",
    "revision": "ebcfa6f72391a20499762f45b814dff0"
  },
  {
    "url": "assets/js/60.35e7c0f7.js",
    "revision": "94c7ac48999c7ca1ac0f16d5a746b418"
  },
  {
    "url": "assets/js/61.cde9a35c.js",
    "revision": "63e0355a18aff13ed0f029e0a18d2f52"
  },
  {
    "url": "assets/js/62.ca51cd89.js",
    "revision": "1fdc926b0264932b1fbe51aaf584051b"
  },
  {
    "url": "assets/js/63.02496ca3.js",
    "revision": "831671ff41ed631b918f8816e9caebcf"
  },
  {
    "url": "assets/js/64.e4d517fd.js",
    "revision": "1412b9e3f13441ffed717953af5a47a2"
  },
  {
    "url": "assets/js/65.15c5308f.js",
    "revision": "eff0f5f834b72980b97f70545b4883da"
  },
  {
    "url": "assets/js/66.8198a957.js",
    "revision": "b23b0d902b61c59cad7d7e946b82a62d"
  },
  {
    "url": "assets/js/67.40f850a2.js",
    "revision": "aec7f29560c76330f1e82bf36b49ef0c"
  },
  {
    "url": "assets/js/68.123c1052.js",
    "revision": "d55f4599be36d23b719a4f6a3ebf3738"
  },
  {
    "url": "assets/js/69.e426ccb0.js",
    "revision": "efa4f1ce9709ae347479d2240401394a"
  },
  {
    "url": "assets/js/7.e446ea68.js",
    "revision": "76b8c3ca6d1997e6b6c89d83e1999211"
  },
  {
    "url": "assets/js/70.8063fd79.js",
    "revision": "a8a3f4d87c950ecc8dfb2f0d7655bc96"
  },
  {
    "url": "assets/js/71.1e0a6d99.js",
    "revision": "b906b3db51df3bd28dc534c633ce3244"
  },
  {
    "url": "assets/js/72.0df57dfe.js",
    "revision": "022ab6534b21889a44ebe6c6146a8124"
  },
  {
    "url": "assets/js/73.83527f1b.js",
    "revision": "cb161c1871f746283b14f1e9aaf952b1"
  },
  {
    "url": "assets/js/74.e2b902ca.js",
    "revision": "0c41f4887381e102cc44374b18fb177f"
  },
  {
    "url": "assets/js/75.a6c46ba2.js",
    "revision": "1f77cdf397d8601399740460d35f42ce"
  },
  {
    "url": "assets/js/76.1243bf79.js",
    "revision": "d6adc9a673a4a46aee26d916065572af"
  },
  {
    "url": "assets/js/77.b4f8a175.js",
    "revision": "bcbbb37858563a65a2761ae96153316d"
  },
  {
    "url": "assets/js/78.9f079611.js",
    "revision": "140986655cc1235967f736ff3847a438"
  },
  {
    "url": "assets/js/79.f2020cb6.js",
    "revision": "5eb3edba24d6f2122bfa8fd6acfe8312"
  },
  {
    "url": "assets/js/8.cf965135.js",
    "revision": "29e873201165988d6405af4d460a03e2"
  },
  {
    "url": "assets/js/80.27d7f8b7.js",
    "revision": "d7db6803c5415c04731a1637e30032bd"
  },
  {
    "url": "assets/js/81.5f0722dd.js",
    "revision": "160a7c6dd38bcf418db1fcbcc244796b"
  },
  {
    "url": "assets/js/82.b6e69ed4.js",
    "revision": "e72b7b0d89ddbcc1ef7646e266b40648"
  },
  {
    "url": "assets/js/83.0868ec6d.js",
    "revision": "73641f64ed95e14ba372c33b3ba7613b"
  },
  {
    "url": "assets/js/84.a07f53b7.js",
    "revision": "ee820ae17810524999e354be2004e339"
  },
  {
    "url": "assets/js/85.ebbaf03b.js",
    "revision": "f260c43ba3b7dbce9b9d18bc122ff764"
  },
  {
    "url": "assets/js/86.8239aa81.js",
    "revision": "1f010798ba0d5418875b0ef39892ba88"
  },
  {
    "url": "assets/js/9.10b16a74.js",
    "revision": "42554b143466ff3dc21c922949507112"
  },
  {
    "url": "assets/js/app.df69bb23.js",
    "revision": "82405749c8ffdd98ff192a4c60e58fd1"
  },
  {
    "url": "compiler/ast.html",
    "revision": "b2bed058699171bd73908bddc7c2a5ec"
  },
  {
    "url": "compiler/binder.html",
    "revision": "72ea9ea95e5ce05015216f6889f4cf8b"
  },
  {
    "url": "compiler/checker.html",
    "revision": "a02070932b6225228d17ccbc71d24a84"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "6cabf786e67769d3c60a7c117983d859"
  },
  {
    "url": "compiler/overview.html",
    "revision": "68beb4fbb513a6c6591f1795ee735530"
  },
  {
    "url": "compiler/parser.html",
    "revision": "f9b6b4b674a61adf9b5f5bf60cd583c2"
  },
  {
    "url": "compiler/program.html",
    "revision": "318116435a9157c9a8a2ec0546202fd9"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "ea9ea364769b8c773d68c03a4e4f533d"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "6a47a5b792066d10abd32a3ade77c53a"
  },
  {
    "url": "error/interpreting.html",
    "revision": "7679e2087c90d403043de63c2f851cf8"
  },
  {
    "url": "faqs/class.html",
    "revision": "73c74df07b827b44ae0d29286053817e"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "a744aa9f6fec42791894047997c8b437"
  },
  {
    "url": "faqs/comments.html",
    "revision": "8acea17e04ecbd5eb1316fb13d14afc9"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "a81e18fc7dc0427fc9cb1863cb3c4ac8"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "93678d104690cf1caefe8330b45d35ac"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "e22905fbcd7cbff5315824edfdcb847c"
  },
  {
    "url": "faqs/enums.html",
    "revision": "798f712872f3f82169d46c6ca606f792"
  },
  {
    "url": "faqs/function.html",
    "revision": "4ac843acdacc30e63695dff401242f30"
  },
  {
    "url": "faqs/generics.html",
    "revision": "5ede12e77dbce431b5089d004e90e6c8"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "59302fd37ef49466c9d9e681dc28e555"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "36b8dae3d6cacf09fa2c475423dc1b3b"
  },
  {
    "url": "faqs/modules.html",
    "revision": "56bbb56deb13aaf6d9b02aa982895562"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "641964ada5f37127ac6e2f82c688da95"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "7f568ba11f0e34498ce03a3c6e4c92fc"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "11acd33744b49e46537be18990984b24"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "9b53afecc6f5afec5807a2bce99570ed"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "bd17e8ab01ee2efcbe9b9052ee005f00"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "f0c4d513252d553f1c3e660309c76632"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "7d2412e2f3b9c2018d4a4cf32a76e74d"
  },
  {
    "url": "jsx/support.html",
    "revision": "95e411e535b60665383b1c2eb4f02a69"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "5c6de5fa15a6492b2655cabdc37a616e"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "e4be643727a9efe7f120bd706024b60c"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "ad2523dee3f6c81a86a569acccb47b0d"
  },
  {
    "url": "project/modules.html",
    "revision": "d57553ae3c916e033ccdd8c6b4bead54"
  },
  {
    "url": "project/namespaces.html",
    "revision": "7105661a873a87b49fe110300633e819"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "66c835a70bfb91515513170dc0b6d8ec"
  },
  {
    "url": "tips/barrel.html",
    "revision": "3a35b174ed01ebd0ecbd6e7855aa3653"
  },
  {
    "url": "tips/bind.html",
    "revision": "c8e6f97f5e8ccd0968bd97a627619ab3"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "3c4cd52fa813ab75820eba39d60a227c"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "3f421de3fac192e28d3c727363e0df43"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "b8a3a882ab57e43f57bbcb177703459d"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "663598313c27651e89ba7f0dfdd37d4a"
  },
  {
    "url": "tips/curry.html",
    "revision": "c4eb9637ec7ac5c5198afa28cac586be"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "9dcd5e92a836624119650c4904a6edc1"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "983a139d342256be407a814e14c09bd9"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "4923ee53a7c90f334648b8f298f5135f"
  },
  {
    "url": "tips/metadata.html",
    "revision": "ffeffbcb8223232b969e5fa6a43654e6"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "f8c08a52c63cd679197b6cc64415f9a1"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "99fa6c69af47a5b29154cfc6617e1d03"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "42fbf73ad5d30aaf71c4fe01221b984b"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "700aac49ea0912d541426354004f6e5f"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "6d92de0e8b6874be520c0531e6aa41af"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "15e336b56e253a3da1ab298c9cb89942"
  },
  {
    "url": "tips/truthy.html",
    "revision": "7770500ae6ad2c19d5abb6b5ba321c34"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "db09d911c87a6e1137d6a70656b7e053"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "f9329a645622bc8269a767b8bac8a8a8"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "18e1632cbefef791f76ace89d9eb37a7"
  },
  {
    "url": "typings/callable.html",
    "revision": "5fa0a8595f4178e25b77dd7623e9cc6a"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "4c07e5cd2dbf523333bb9206a7897b9f"
  },
  {
    "url": "typings/enums.html",
    "revision": "6590abb461a016c2c2637d4f4ca82453"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "f2049d7f59eeb624f1db82abb6abd087"
  },
  {
    "url": "typings/freshness.html",
    "revision": "1f8e37c308f7523087a1ac2e9bdbb79a"
  },
  {
    "url": "typings/functions.html",
    "revision": "9bb2b6d03e68c7c2a6d1583e16461257"
  },
  {
    "url": "typings/generices.html",
    "revision": "6cfd4d95c2507438da9dce1728bf8d02"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "521c46909aceac32264652b3283ca65d"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "790215007725cef22a405f8615d3a29f"
  },
  {
    "url": "typings/lib.html",
    "revision": "fe9813628e4045abc605a55cceb98610"
  },
  {
    "url": "typings/literals.html",
    "revision": "06a485d3c53b5f673c7ff6f3705e64e2"
  },
  {
    "url": "typings/migrating.html",
    "revision": "5a286601a468956ec43033b723ad1d99"
  },
  {
    "url": "typings/mixins.html",
    "revision": "2969738c5eefd3423b087492791e1264"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "bcfa854ec76ff4cb57dd6b2c7800a334"
  },
  {
    "url": "typings/neverType.html",
    "revision": "89540599ab89baa0c8570a869e9d0c9d"
  },
  {
    "url": "typings/overview.html",
    "revision": "732f7555630bbb4065de46104ad28bed"
  },
  {
    "url": "typings/readonly.html",
    "revision": "ffb44b694fc25f0e4a45bada60f51900"
  },
  {
    "url": "typings/thisType.html",
    "revision": "4e1f8d28ab54cdd34fef31e695128398"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "78d0eefdafa18d8c77391a88c409f41d"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "0179fc003374dfb38bd8c635c97ad70b"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "63061405b2b87fa3078ca2b8378616bb"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "555d57abe5c728b2826d3d8938d6904f"
  },
  {
    "url": "typings/types.html",
    "revision": "792ba852ba00a543446ccc91485c60f3"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
