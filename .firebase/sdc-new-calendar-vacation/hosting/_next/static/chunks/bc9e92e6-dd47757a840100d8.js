"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{9978:function(e,t,r){r.d(t,{EK:function(){return Timestamp},IO:function(){return query},JU:function(){return doc},PL:function(){return getDocs},QT:function(){return getDoc},ad:function(){return getFirestore},ar:function(){return where},hJ:function(){return collection},oe:function(){return deleteDoc},pl:function(){return setDoc},r7:function(){return updateDoc}});var n,i,s,a,o=r(3991),l=r(5538),u=r(6914),c=r(8745),_=r(613);r(2601);var h=r(631).lW;let d="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let User=class User{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};User.UNAUTHENTICATED=new User(null),User.GOOGLE_CREDENTIALS=new User("google-credentials-uid"),User.FIRST_PARTY=new User("first-party-uid"),User.MOCK_USER=new User("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m="10.11.1",f=new u.Yd("@firebase/firestore");function __PRIVATE_getLogLevel(){return f.logLevel}function __PRIVATE_logDebug(e,...t){if(f.logLevel<=u.in.DEBUG){let r=t.map(__PRIVATE_argToString);f.debug(`Firestore (${m}): ${e}`,...r)}}function __PRIVATE_logError(e,...t){if(f.logLevel<=u.in.ERROR){let r=t.map(__PRIVATE_argToString);f.error(`Firestore (${m}): ${e}`,...r)}}function __PRIVATE_logWarn(e,...t){if(f.logLevel<=u.in.WARN){let r=t.map(__PRIVATE_argToString);f.warn(`Firestore (${m}): ${e}`,...r)}}function __PRIVATE_argToString(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fail(e="Unexpected state"){let t=`FIRESTORE (${m}) INTERNAL ASSERTION FAILED: `+e;throw __PRIVATE_logError(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let FirestoreError=class FirestoreError extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_Deferred=class __PRIVATE_Deferred{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_OAuthToken=class __PRIVATE_OAuthToken{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}};let __PRIVATE_EmptyAuthCredentialsProvider=class __PRIVATE_EmptyAuthCredentialsProvider{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(User.UNAUTHENTICATED))}shutdown(){}};let __PRIVATE_EmulatorAuthCredentialsProvider=class __PRIVATE_EmulatorAuthCredentialsProvider{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}};let __PRIVATE_FirebaseAuthCredentialsProvider=class __PRIVATE_FirebaseAuthCredentialsProvider{constructor(e){this.t=e,this.currentUser=User.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,__PRIVATE_guardedChangeListener=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),n=new __PRIVATE_Deferred;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new __PRIVATE_Deferred,e.enqueueRetryable(()=>__PRIVATE_guardedChangeListener(this.currentUser))};let __PRIVATE_awaitNextToken=()=>{let t=n;e.enqueueRetryable(async()=>{await t.promise,await __PRIVATE_guardedChangeListener(this.currentUser)})},__PRIVATE_registerAuth=e=>{__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),__PRIVATE_awaitNextToken()};this.t.onInit(e=>__PRIVATE_registerAuth(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?__PRIVATE_registerAuth(e):(__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new __PRIVATE_Deferred)}},0),__PRIVATE_awaitNextToken()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||fail(),new __PRIVATE_OAuthToken(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||fail(),new User(e)}};let __PRIVATE_FirstPartyToken=class __PRIVATE_FirstPartyToken{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=User.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}};let __PRIVATE_FirstPartyAuthCredentialsProvider=class __PRIVATE_FirstPartyAuthCredentialsProvider{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new __PRIVATE_FirstPartyToken(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(User.FIRST_PARTY))}shutdown(){}invalidateToken(){}};let AppCheckToken=class AppCheckToken{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};let __PRIVATE_FirebaseAppCheckTokenProvider=class __PRIVATE_FirebaseAppCheckTokenProvider{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let onTokenChanged=e=>{null!=e.error&&__PRIVATE_logDebug("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,__PRIVATE_logDebug("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>onTokenChanged(t))};let __PRIVATE_registerAppCheck=e=>{__PRIVATE_logDebug("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>__PRIVATE_registerAppCheck(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?__PRIVATE_registerAppCheck(e):__PRIVATE_logDebug("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||fail(),this.R=e.token,new AppCheckToken(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_randomBytes(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AutoId=class __PRIVATE_AutoId{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=__PRIVATE_randomBytes(40);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}};function __PRIVATE_primitiveComparator(e,t){return e<t?-1:e>t?1:0}function __PRIVATE_arrayEquals(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Timestamp=class Timestamp{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new FirestoreError(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new FirestoreError(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Timestamp.fromMillis(Date.now())}static fromDate(e){return Timestamp.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Timestamp(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?__PRIVATE_primitiveComparator(this.nanoseconds,e.nanoseconds):__PRIVATE_primitiveComparator(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SnapshotVersion=class SnapshotVersion{constructor(e){this.timestamp=e}static fromTimestamp(e){return new SnapshotVersion(e)}static min(){return new SnapshotVersion(new Timestamp(0,0))}static max(){return new SnapshotVersion(new Timestamp(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BasePath=class BasePath{constructor(e,t,r){void 0===t?t=0:t>e.length&&fail(),void 0===r?r=e.length-t:r>e.length-t&&fail(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===BasePath.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof BasePath?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}};let ResourcePath=class ResourcePath extends BasePath{construct(e,t,r){return new ResourcePath(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new FirestoreError(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new ResourcePath(t)}static emptyPath(){return new ResourcePath([])}};let p=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let FieldPath$1=class FieldPath$1 extends BasePath{construct(e,t,r){return new FieldPath$1(e,t,r)}static isValidIdentifier(e){return p.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),FieldPath$1.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new FieldPath$1(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,__PRIVATE_addCurrentSegment=()=>{if(0===r.length)throw new FirestoreError(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},i=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new FirestoreError(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new FirestoreError(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?i=!i:"."!==t||i?r+=t:__PRIVATE_addCurrentSegment(),n++}if(__PRIVATE_addCurrentSegment(),i)throw new FirestoreError(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new FieldPath$1(t)}static emptyPath(){return new FieldPath$1([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DocumentKey=class DocumentKey{constructor(e){this.path=e}static fromPath(e){return new DocumentKey(ResourcePath.fromString(e))}static fromName(e){return new DocumentKey(ResourcePath.fromString(e).popFirst(5))}static empty(){return new DocumentKey(ResourcePath.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ResourcePath.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ResourcePath.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new DocumentKey(new ResourcePath(e.slice()))}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldIndex=class FieldIndex{constructor(e,t,r,n){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=n}};function __PRIVATE_newIndexOffsetSuccessorFromReadTime(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=SnapshotVersion.fromTimestamp(1e9===n?new Timestamp(r+1,0):new Timestamp(r,n));return new IndexOffset(i,DocumentKey.empty(),t)}function __PRIVATE_newIndexOffsetFromDocument(e){return new IndexOffset(e.readTime,e.key,-1)}FieldIndex.UNKNOWN_ID=-1;let IndexOffset=class IndexOffset{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new IndexOffset(SnapshotVersion.min(),DocumentKey.empty(),-1)}static max(){return new IndexOffset(SnapshotVersion.max(),DocumentKey.empty(),-1)}};function __PRIVATE_indexOffsetComparator(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=DocumentKey.comparator(e.documentKey,t.documentKey))?r:__PRIVATE_primitiveComparator(e.largestBatchId,t.largestBatchId)}let PersistenceTransaction=class PersistenceTransaction{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __PRIVATE_ignoreIfPrimaryLeaseLoss(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;__PRIVATE_logDebug("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PersistencePromise=class PersistencePromise{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fail(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new PersistencePromise((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof PersistencePromise?t:PersistencePromise.resolve(t)}catch(e){return PersistencePromise.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):PersistencePromise.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):PersistencePromise.reject(t)}static resolve(e){return new PersistencePromise((t,r)=>{t(e)})}static reject(e){return new PersistencePromise((t,r)=>{r(e)})}static waitFor(e){return new PersistencePromise((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=PersistencePromise.resolve(!1);for(let r of e)t=t.next(e=>e?PersistencePromise.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new PersistencePromise((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new PersistencePromise((r,n)=>{let process=()=>{!0===e()?t().next(()=>{process()},n):r()};process()})}};function __PRIVATE_getAndroidVersion(e){let t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function __PRIVATE_isIndexedDbTransactionError(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_ListenSequence=class __PRIVATE_ListenSequence{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};function __PRIVATE_isNegativeZero(e){return 0===e&&1/e==-1/0}function isSafeInteger(e){return"number"==typeof e&&Number.isInteger(e)&&!__PRIVATE_isNegativeZero(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_objectSize(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function forEach(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function isEmpty(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}__PRIVATE_ListenSequence.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SortedMap=class SortedMap{constructor(e,t){this.comparator=e,this.root=t||LLRBNode.EMPTY}insert(e,t){return new SortedMap(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,LLRBNode.BLACK,null,null))}remove(e){return new SortedMap(this.comparator,this.root.remove(e,this.comparator).copy(null,null,LLRBNode.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new SortedMapIterator(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new SortedMapIterator(this.root,e,this.comparator,!1)}getReverseIterator(){return new SortedMapIterator(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new SortedMapIterator(this.root,e,this.comparator,!0)}};let SortedMapIterator=class SortedMapIterator{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}};let LLRBNode=class LLRBNode{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:LLRBNode.RED,this.left=null!=n?n:LLRBNode.EMPTY,this.right=null!=i?i:LLRBNode.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new LLRBNode(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return LLRBNode.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return LLRBNode.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,LLRBNode.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,LLRBNode.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fail();let e=this.left.check();if(e!==this.right.check())throw fail();return e+(this.isRed()?0:1)}};LLRBNode.EMPTY=null,LLRBNode.RED=!0,LLRBNode.BLACK=!1,LLRBNode.EMPTY=new class{constructor(){this.size=0}get key(){throw fail()}get value(){throw fail()}get color(){throw fail()}get left(){throw fail()}get right(){throw fail()}copy(e,t,r,n,i){return this}insert(e,t,r){return new LLRBNode(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SortedSet=class SortedSet{constructor(e){this.comparator=e,this.data=new SortedMap(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new SortedSetIterator(this.data.getIterator())}getIteratorFrom(e){return new SortedSetIterator(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof SortedSet)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new SortedSet(this.comparator);return t.data=e,t}};let SortedSetIterator=class SortedSetIterator{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldMask=class FieldMask{constructor(e){this.fields=e,e.sort(FieldPath$1.comparator)}static empty(){return new FieldMask([])}unionWith(e){let t=new SortedSet(FieldPath$1.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new FieldMask(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return __PRIVATE_arrayEquals(this.fields,e.fields,(e,t)=>e.isEqual(t))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_Base64DecodeError=class __PRIVATE_Base64DecodeError extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ByteString=class ByteString{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new __PRIVATE_Base64DecodeError("Invalid base64 string: "+e):e}}(e);return new ByteString(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new ByteString(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return __PRIVATE_primitiveComparator(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};ByteString.EMPTY_BYTE_STRING=new ByteString("");let T=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function __PRIVATE_normalizeTimestamp(e){if(e||fail(),"string"==typeof e){let t=0,r=T.exec(e);if(r||fail(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:__PRIVATE_normalizeNumber(e.seconds),nanos:__PRIVATE_normalizeNumber(e.nanos)}}function __PRIVATE_normalizeNumber(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function __PRIVATE_normalizeByteString(e){return"string"==typeof e?ByteString.fromBase64String(e):ByteString.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_isServerTimestamp(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function __PRIVATE_getPreviousValue(e){let t=e.mapValue.fields.__previous_value__;return __PRIVATE_isServerTimestamp(t)?__PRIVATE_getPreviousValue(t):t}function __PRIVATE_getLocalWriteTime(e){let t=__PRIVATE_normalizeTimestamp(e.mapValue.fields.__local_write_time__.timestampValue);return new Timestamp(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DatabaseInfo=class DatabaseInfo{constructor(e,t,r,n,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}};let DatabaseId=class DatabaseId{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new DatabaseId("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof DatabaseId&&e.projectId===this.projectId&&e.database===this.database}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function __PRIVATE_typeOrder(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?__PRIVATE_isServerTimestamp(e)?4:__PRIVATE_isMaxValue(e)?9007199254740991:10:fail()}function __PRIVATE_valueEquals(e,t){if(e===t)return!0;let r=__PRIVATE_typeOrder(e);if(r!==__PRIVATE_typeOrder(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return __PRIVATE_getLocalWriteTime(e).isEqual(__PRIVATE_getLocalWriteTime(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=__PRIVATE_normalizeTimestamp(e.timestampValue),n=__PRIVATE_normalizeTimestamp(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return __PRIVATE_normalizeByteString(e.bytesValue).isEqual(__PRIVATE_normalizeByteString(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return __PRIVATE_normalizeNumber(e.geoPointValue.latitude)===__PRIVATE_normalizeNumber(t.geoPointValue.latitude)&&__PRIVATE_normalizeNumber(e.geoPointValue.longitude)===__PRIVATE_normalizeNumber(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return __PRIVATE_normalizeNumber(e.integerValue)===__PRIVATE_normalizeNumber(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=__PRIVATE_normalizeNumber(e.doubleValue),n=__PRIVATE_normalizeNumber(t.doubleValue);return r===n?__PRIVATE_isNegativeZero(r)===__PRIVATE_isNegativeZero(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return __PRIVATE_arrayEquals(e.arrayValue.values||[],t.arrayValue.values||[],__PRIVATE_valueEquals);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(__PRIVATE_objectSize(r)!==__PRIVATE_objectSize(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!__PRIVATE_valueEquals(r[e],n[e])))return!1;return!0}(e,t);default:return fail()}}function __PRIVATE_arrayValueContains(e,t){return void 0!==(e.values||[]).find(e=>__PRIVATE_valueEquals(e,t))}function __PRIVATE_valueCompare(e,t){if(e===t)return 0;let r=__PRIVATE_typeOrder(e),n=__PRIVATE_typeOrder(t);if(r!==n)return __PRIVATE_primitiveComparator(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return __PRIVATE_primitiveComparator(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=__PRIVATE_normalizeNumber(e.integerValue||e.doubleValue),n=__PRIVATE_normalizeNumber(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return __PRIVATE_compareTimestamps(e.timestampValue,t.timestampValue);case 4:return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(e),__PRIVATE_getLocalWriteTime(t));case 5:return __PRIVATE_primitiveComparator(e.stringValue,t.stringValue);case 6:return function(e,t){let r=__PRIVATE_normalizeByteString(e),n=__PRIVATE_normalizeByteString(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=__PRIVATE_primitiveComparator(r[e],n[e]);if(0!==t)return t}return __PRIVATE_primitiveComparator(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=__PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e.latitude),__PRIVATE_normalizeNumber(t.latitude));return 0!==r?r:__PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e.longitude),__PRIVATE_normalizeNumber(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=__PRIVATE_valueCompare(r[e],n[e]);if(t)return t}return __PRIVATE_primitiveComparator(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===g.mapValue&&t===g.mapValue)return 0;if(e===g.mapValue)return 1;if(t===g.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=__PRIVATE_primitiveComparator(n[e],s[e]);if(0!==t)return t;let a=__PRIVATE_valueCompare(r[n[e]],i[s[e]]);if(0!==a)return a}return __PRIVATE_primitiveComparator(n.length,s.length)}(e.mapValue,t.mapValue);default:throw fail()}}function __PRIVATE_compareTimestamps(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return __PRIVATE_primitiveComparator(e,t);let r=__PRIVATE_normalizeTimestamp(e),n=__PRIVATE_normalizeTimestamp(t),i=__PRIVATE_primitiveComparator(r.seconds,n.seconds);return 0!==i?i:__PRIVATE_primitiveComparator(r.nanos,n.nanos)}function __PRIVATE_canonifyValue(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=__PRIVATE_normalizeTimestamp(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?__PRIVATE_normalizeByteString(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,DocumentKey.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=__PRIVATE_canonifyValue(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${__PRIVATE_canonifyValue(e.fields[i])}`;return r+"}"}(e.mapValue):fail()}function __PRIVATE_refValue(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function isInteger(e){return!!e&&"integerValue"in e}function isArray(e){return!!e&&"arrayValue"in e}function __PRIVATE_isNullValue(e){return!!e&&"nullValue"in e}function __PRIVATE_isNanValue(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function __PRIVATE_isMapValue(e){return!!e&&"mapValue"in e}function __PRIVATE_deepClone(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return forEach(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=__PRIVATE_deepClone(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=__PRIVATE_deepClone(e.arrayValue.values[r]);return t}return Object.assign({},e)}function __PRIVATE_isMaxValue(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ObjectValue=class ObjectValue{constructor(e){this.value=e}static empty(){return new ObjectValue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!__PRIVATE_isMapValue(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=__PRIVATE_deepClone(t)}setAll(e){let t=FieldPath$1.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=__PRIVATE_deepClone(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());__PRIVATE_isMapValue(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return __PRIVATE_valueEquals(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];__PRIVATE_isMapValue(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(forEach(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new ObjectValue(__PRIVATE_deepClone(this.value))}};function __PRIVATE_extractFieldMask(e){let t=[];return forEach(e.fields,(e,r)=>{let n=new FieldPath$1([e]);if(__PRIVATE_isMapValue(r)){let e=__PRIVATE_extractFieldMask(r.mapValue).fields;if(0===e.length)t.push(n);else for(let r of e)t.push(n.child(r))}else t.push(n)}),new FieldMask(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MutableDocument=class MutableDocument{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new MutableDocument(e,0,SnapshotVersion.min(),SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),0)}static newFoundDocument(e,t,r,n){return new MutableDocument(e,1,t,SnapshotVersion.min(),r,n,0)}static newNoDocument(e,t){return new MutableDocument(e,2,t,SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),0)}static newUnknownDocument(e,t){return new MutableDocument(e,3,t,SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(SnapshotVersion.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ObjectValue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ObjectValue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=SnapshotVersion.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof MutableDocument&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new MutableDocument(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bound=class Bound{constructor(e,t){this.position=e,this.inclusive=t}};function __PRIVATE_boundCompareToDocument(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?DocumentKey.comparator(DocumentKey.fromName(a.referenceValue),r.key):__PRIVATE_valueCompare(a,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function __PRIVATE_boundEquals(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!__PRIVATE_valueEquals(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OrderBy=class OrderBy{constructor(e,t="asc"){this.field=e,this.dir=t}};function __PRIVATE_orderByEquals(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Filter=class Filter{};let FieldFilter=class FieldFilter extends Filter{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new __PRIVATE_KeyFieldFilter(e,t,r):"array-contains"===t?new __PRIVATE_ArrayContainsFilter(e,r):"in"===t?new __PRIVATE_InFilter(e,r):"not-in"===t?new __PRIVATE_NotInFilter(e,r):"array-contains-any"===t?new __PRIVATE_ArrayContainsAnyFilter(e,r):new FieldFilter(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new __PRIVATE_KeyFieldInFilter(e,r):new __PRIVATE_KeyFieldNotInFilter(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(__PRIVATE_valueCompare(t,this.value)):null!==t&&__PRIVATE_typeOrder(this.value)===__PRIVATE_typeOrder(t)&&this.matchesComparison(__PRIVATE_valueCompare(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return fail()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}};let CompositeFilter=class CompositeFilter extends Filter{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new CompositeFilter(e,t)}matches(e){return __PRIVATE_compositeFilterIsConjunction(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function __PRIVATE_compositeFilterIsConjunction(e){return"and"===e.op}function __PRIVATE_compositeFilterIsFlat(e){for(let t of e.filters)if(t instanceof CompositeFilter)return!1;return!0}function __PRIVATE_canonifyFilter(e){if(e instanceof FieldFilter)return e.field.canonicalString()+e.op.toString()+__PRIVATE_canonifyValue(e.value);if(__PRIVATE_compositeFilterIsFlat(e)&&__PRIVATE_compositeFilterIsConjunction(e))return e.filters.map(e=>__PRIVATE_canonifyFilter(e)).join(",");{let t=e.filters.map(e=>__PRIVATE_canonifyFilter(e)).join(",");return`${e.op}(${t})`}}function __PRIVATE_filterEquals(e,t){return e instanceof FieldFilter?t instanceof FieldFilter&&e.op===t.op&&e.field.isEqual(t.field)&&__PRIVATE_valueEquals(e.value,t.value):e instanceof CompositeFilter?t instanceof CompositeFilter&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,r,n)=>e&&__PRIVATE_filterEquals(r,t.filters[n]),!0):void fail()}function __PRIVATE_stringifyFilter(e){return e instanceof FieldFilter?`${e.field.canonicalString()} ${e.op} ${__PRIVATE_canonifyValue(e.value)}`:e instanceof CompositeFilter?e.op.toString()+" {"+e.getFilters().map(__PRIVATE_stringifyFilter).join(" ,")+"}":"Filter"}let __PRIVATE_KeyFieldFilter=class __PRIVATE_KeyFieldFilter extends FieldFilter{constructor(e,t,r){super(e,t,r),this.key=DocumentKey.fromName(r.referenceValue)}matches(e){let t=DocumentKey.comparator(e.key,this.key);return this.matchesComparison(t)}};let __PRIVATE_KeyFieldInFilter=class __PRIVATE_KeyFieldInFilter extends FieldFilter{constructor(e,t){super(e,"in",t),this.keys=__PRIVATE_extractDocumentKeysFromArrayValue("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}};let __PRIVATE_KeyFieldNotInFilter=class __PRIVATE_KeyFieldNotInFilter extends FieldFilter{constructor(e,t){super(e,"not-in",t),this.keys=__PRIVATE_extractDocumentKeysFromArrayValue("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function __PRIVATE_extractDocumentKeysFromArrayValue(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>DocumentKey.fromName(e.referenceValue))}let __PRIVATE_ArrayContainsFilter=class __PRIVATE_ArrayContainsFilter extends FieldFilter{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return isArray(t)&&__PRIVATE_arrayValueContains(t.arrayValue,this.value)}};let __PRIVATE_InFilter=class __PRIVATE_InFilter extends FieldFilter{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&__PRIVATE_arrayValueContains(this.value.arrayValue,t)}};let __PRIVATE_NotInFilter=class __PRIVATE_NotInFilter extends FieldFilter{constructor(e,t){super(e,"not-in",t)}matches(e){if(__PRIVATE_arrayValueContains(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!__PRIVATE_arrayValueContains(this.value.arrayValue,t)}};let __PRIVATE_ArrayContainsAnyFilter=class __PRIVATE_ArrayContainsAnyFilter extends FieldFilter{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!isArray(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>__PRIVATE_arrayValueContains(this.value.arrayValue,e))}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_TargetImpl=class __PRIVATE_TargetImpl{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null}};function __PRIVATE_newTarget(e,t=null,r=[],n=[],i=null,s=null,a=null){return new __PRIVATE_TargetImpl(e,t,r,n,i,s,a)}function __PRIVATE_canonifyTarget(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>__PRIVATE_canonifyFilter(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>__PRIVATE_canonifyValue(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>__PRIVATE_canonifyValue(e)).join(",")),e.ue=t}return e.ue}function __PRIVATE_targetEquals(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!__PRIVATE_orderByEquals(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!__PRIVATE_filterEquals(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!__PRIVATE_boundEquals(e.startAt,t.startAt)&&__PRIVATE_boundEquals(e.endAt,t.endAt)}function __PRIVATE_targetIsDocumentTarget(e){return DocumentKey.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_QueryImpl=class __PRIVATE_QueryImpl{constructor(e,t=null,r=[],n=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function __PRIVATE_newQuery(e,t,r,n,i,s,a,o){return new __PRIVATE_QueryImpl(e,t,r,n,i,s,a,o)}function __PRIVATE_queryMatchesAllDocuments(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function __PRIVATE_isCollectionGroupQuery(e){return null!==e.collectionGroup}function __PRIVATE_queryNormalizedOrderBy(e){if(null===e.ce){let t;e.ce=[];let r=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=(t=new SortedSet(FieldPath$1.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t);i.forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.ce.push(new OrderBy(t,n))}),r.has(FieldPath$1.keyField().canonicalString())||e.ce.push(new OrderBy(FieldPath$1.keyField(),n))}return e.ce}function __PRIVATE_queryToTarget(e){return e.le||(e.le=__PRIVATE__queryToTarget(e,__PRIVATE_queryNormalizedOrderBy(e))),e.le}function __PRIVATE__queryToTarget(e,t){if("F"===e.limitType)return __PRIVATE_newTarget(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new OrderBy(e.field,t)});let r=e.endAt?new Bound(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new Bound(e.startAt.position,e.startAt.inclusive):null;return __PRIVATE_newTarget(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}function __PRIVATE_queryWithAddedFilter(e,t){let r=e.filters.concat([t]);return new __PRIVATE_QueryImpl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function __PRIVATE_queryWithLimit(e,t,r){return new __PRIVATE_QueryImpl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function __PRIVATE_queryEquals(e,t){return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(e),__PRIVATE_queryToTarget(t))&&e.limitType===t.limitType}function __PRIVATE_canonifyQuery(e){return`${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(e))}|lt:${e.limitType}`}function __PRIVATE_stringifyQuery(e){var t;let r;return`Query(target=${r=(t=__PRIVATE_queryToTarget(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>__PRIVATE_stringifyFilter(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>__PRIVATE_canonifyValue(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>__PRIVATE_canonifyValue(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function __PRIVATE_queryMatches(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):DocumentKey.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of __PRIVATE_queryNormalizedOrderBy(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=__PRIVATE_boundCompareToDocument(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,__PRIVATE_queryNormalizedOrderBy(e),t))&&(!e.endAt||!!function(e,t,r){let n=__PRIVATE_boundCompareToDocument(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,__PRIVATE_queryNormalizedOrderBy(e),t))}function __PRIVATE_queryCollectionGroup(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function __PRIVATE_newQueryComparator(e){return(t,r)=>{let n=!1;for(let i of __PRIVATE_queryNormalizedOrderBy(e)){let e=__PRIVATE_compareDocs(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}function __PRIVATE_compareDocs(e,t,r){let n=e.field.isKeyField()?DocumentKey.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?__PRIVATE_valueCompare(n,i):fail()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return fail()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ObjectMap=class ObjectMap{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){forEach(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return isEmpty(this.inner)}size(){return this.innerSize}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I=new SortedMap(DocumentKey.comparator),P=new SortedMap(DocumentKey.comparator);function documentMap(...e){let t=P;for(let r of e)t=t.insert(r.key,r);return t}function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e){let t=P;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function __PRIVATE_newDocumentKeyMap(){return new ObjectMap(e=>e.toString(),(e,t)=>e.isEqual(t))}let A=new SortedMap(DocumentKey.comparator),R=new SortedSet(DocumentKey.comparator);function __PRIVATE_documentKeySet(...e){let t=R;for(let r of e)t=t.add(r);return t}let y=new SortedSet(__PRIVATE_primitiveComparator);function __PRIVATE_targetIdSet(){return y}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_toDouble(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:__PRIVATE_isNegativeZero(t)?"-0":t}}function __PRIVATE_toInteger(e){return{integerValue:""+e}}function toNumber(e,t){return isSafeInteger(t)?__PRIVATE_toInteger(t):__PRIVATE_toDouble(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TransformOperation=class TransformOperation{constructor(){this._=void 0}};function __PRIVATE_applyTransformOperationToLocalView(e,t,r){return e instanceof __PRIVATE_ServerTimestampTransform?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&__PRIVATE_isServerTimestamp(t)&&(t=__PRIVATE_getPreviousValue(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(r,t):e instanceof __PRIVATE_ArrayUnionTransformOperation?__PRIVATE_applyArrayUnionTransformOperation(e,t):e instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_applyArrayRemoveTransformOperation(e,t):function(e,t){let r=__PRIVATE_computeTransformOperationBaseValue(e,t),n=asNumber(r)+asNumber(e.Pe);return isInteger(r)&&isInteger(e.Pe)?__PRIVATE_toInteger(n):__PRIVATE_toDouble(e.serializer,n)}(e,t)}function __PRIVATE_applyTransformOperationToRemoteDocument(e,t,r){return e instanceof __PRIVATE_ArrayUnionTransformOperation?__PRIVATE_applyArrayUnionTransformOperation(e,t):e instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_applyArrayRemoveTransformOperation(e,t):r}function __PRIVATE_computeTransformOperationBaseValue(e,t){return e instanceof __PRIVATE_NumericIncrementTransformOperation?isInteger(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}let __PRIVATE_ServerTimestampTransform=class __PRIVATE_ServerTimestampTransform extends TransformOperation{};let __PRIVATE_ArrayUnionTransformOperation=class __PRIVATE_ArrayUnionTransformOperation extends TransformOperation{constructor(e){super(),this.elements=e}};function __PRIVATE_applyArrayUnionTransformOperation(e,t){let r=__PRIVATE_coercedFieldValuesArray(t);for(let t of e.elements)r.some(e=>__PRIVATE_valueEquals(e,t))||r.push(t);return{arrayValue:{values:r}}}let __PRIVATE_ArrayRemoveTransformOperation=class __PRIVATE_ArrayRemoveTransformOperation extends TransformOperation{constructor(e){super(),this.elements=e}};function __PRIVATE_applyArrayRemoveTransformOperation(e,t){let r=__PRIVATE_coercedFieldValuesArray(t);for(let t of e.elements)r=r.filter(e=>!__PRIVATE_valueEquals(e,t));return{arrayValue:{values:r}}}let __PRIVATE_NumericIncrementTransformOperation=class __PRIVATE_NumericIncrementTransformOperation extends TransformOperation{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function asNumber(e){return __PRIVATE_normalizeNumber(e.integerValue||e.doubleValue)}function __PRIVATE_coercedFieldValuesArray(e){return isArray(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function __PRIVATE_fieldTransformEquals(e,t){var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof __PRIVATE_ArrayUnionTransformOperation&&n instanceof __PRIVATE_ArrayUnionTransformOperation||r instanceof __PRIVATE_ArrayRemoveTransformOperation&&n instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_arrayEquals(r.elements,n.elements,__PRIVATE_valueEquals):r instanceof __PRIVATE_NumericIncrementTransformOperation&&n instanceof __PRIVATE_NumericIncrementTransformOperation?__PRIVATE_valueEquals(r.Pe,n.Pe):r instanceof __PRIVATE_ServerTimestampTransform&&n instanceof __PRIVATE_ServerTimestampTransform)}let MutationResult=class MutationResult{constructor(e,t){this.version=e,this.transformResults=t}};let Precondition=class Precondition{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Precondition}static exists(e){return new Precondition(void 0,e)}static updateTime(e){return new Precondition(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function __PRIVATE_preconditionIsValidForDocument(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}let Mutation=class Mutation{};function __PRIVATE_calculateOverlayMutation(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new __PRIVATE_DeleteMutation(e.key,Precondition.none()):new __PRIVATE_SetMutation(e.key,e.data,Precondition.none());{let r=e.data,n=ObjectValue.empty(),i=new SortedSet(FieldPath$1.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new __PRIVATE_PatchMutation(e.key,n,new FieldMask(i.toArray()),Precondition.none())}}function __PRIVATE_mutationApplyToRemoteDocument(e,t,r){e instanceof __PRIVATE_SetMutation?function(e,t,r){let n=e.value.clone(),i=__PRIVATE_serverTransformResults(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(e,t,r):e instanceof __PRIVATE_PatchMutation?function(e,t,r){if(!__PRIVATE_preconditionIsValidForDocument(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=__PRIVATE_serverTransformResults(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(__PRIVATE_getPatch(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(e,t,r):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,r)}function __PRIVATE_mutationApplyToLocalView(e,t,r,n){return e instanceof __PRIVATE_SetMutation?function(e,t,r,n){if(!__PRIVATE_preconditionIsValidForDocument(e.precondition,t))return r;let i=e.value.clone(),s=__PRIVATE_localTransformResults(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof __PRIVATE_PatchMutation?function(e,t,r,n){if(!__PRIVATE_preconditionIsValidForDocument(e.precondition,t))return r;let i=__PRIVATE_localTransformResults(e.fieldTransforms,n,t),s=t.data;return(s.setAll(__PRIVATE_getPatch(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):__PRIVATE_preconditionIsValidForDocument(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function __PRIVATE_mutationExtractBaseValue(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=__PRIVATE_computeTransformOperationBaseValue(n.transform,e||null);null!=i&&(null===r&&(r=ObjectValue.empty()),r.set(n.field,i))}return r||null}function __PRIVATE_mutationEquals(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&__PRIVATE_arrayEquals(r,n,(e,t)=>__PRIVATE_fieldTransformEquals(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}let __PRIVATE_SetMutation=class __PRIVATE_SetMutation extends Mutation{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}};let __PRIVATE_PatchMutation=class __PRIVATE_PatchMutation extends Mutation{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}};function __PRIVATE_getPatch(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function __PRIVATE_serverTransformResults(e,t,r){let n=new Map;e.length===r.length||fail();for(let i=0;i<r.length;i++){let s=e[i],a=s.transform,o=t.data.field(s.field);n.set(s.field,__PRIVATE_applyTransformOperationToRemoteDocument(a,o,r[i]))}return n}function __PRIVATE_localTransformResults(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,__PRIVATE_applyTransformOperationToLocalView(e,s,t))}return n}let __PRIVATE_DeleteMutation=class __PRIVATE_DeleteMutation extends Mutation{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}};let __PRIVATE_VerifyMutation=class __PRIVATE_VerifyMutation extends Mutation{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MutationBatch=class MutationBatch{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let n=this.mutations[t];n.key.isEqual(e.key)&&__PRIVATE_mutationApplyToRemoteDocument(n,e,r[t])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=__PRIVATE_mutationApplyToLocalView(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=__PRIVATE_mutationApplyToLocalView(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=__PRIVATE_newDocumentKeyMap();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(n.key)?null:a;let o=__PRIVATE_calculateOverlayMutation(s,a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(SnapshotVersion.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),__PRIVATE_documentKeySet())}isEqual(e){return this.batchId===e.batchId&&__PRIVATE_arrayEquals(this.mutations,e.mutations,(e,t)=>__PRIVATE_mutationEquals(e,t))&&__PRIVATE_arrayEquals(this.baseMutations,e.baseMutations,(e,t)=>__PRIVATE_mutationEquals(e,t))}};let MutationBatchResult=class MutationBatchResult{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||fail();let n=A,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new MutationBatchResult(e,t,r,n)}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Overlay=class Overlay{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ExistenceFilter=class ExistenceFilter{constructor(e,t){this.count=e,this.unchangedNames=t}};function __PRIVATE_isPermanentError(e){switch(e){default:return fail();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function __PRIVATE_mapCodeFromRpcCode(e){if(void 0===e)return __PRIVATE_logError("GRPC error has no .code"),E.UNKNOWN;switch(e){case n.OK:return E.OK;case n.CANCELLED:return E.CANCELLED;case n.UNKNOWN:return E.UNKNOWN;case n.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case n.INTERNAL:return E.INTERNAL;case n.UNAVAILABLE:return E.UNAVAILABLE;case n.UNAUTHENTICATED:return E.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case n.NOT_FOUND:return E.NOT_FOUND;case n.ALREADY_EXISTS:return E.ALREADY_EXISTS;case n.PERMISSION_DENIED:return E.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case n.ABORTED:return E.ABORTED;case n.OUT_OF_RANGE:return E.OUT_OF_RANGE;case n.UNIMPLEMENTED:return E.UNIMPLEMENTED;case n.DATA_LOSS:return E.DATA_LOSS;default:return fail()}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_newTextEncoder(){return new TextEncoder}(i=n||(n={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let V=new _.z8([4294967295,4294967295],0);function __PRIVATE_getMd5HashValue(e){let t=__PRIVATE_newTextEncoder().encode(e),r=new _.V8;return r.update(t),new Uint8Array(r.digest())}function __PRIVATE_get64BitUints(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new _.z8([r,n],0),new _.z8([i,s],0)]}let BloomFilter=class BloomFilter{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new __PRIVATE_BloomFilterError(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new __PRIVATE_BloomFilterError(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=_.z8.fromNumber(this.Ie)}Ee(e,t,r){let n=e.add(t.multiply(_.z8.fromNumber(r)));return 1===n.compare(V)&&(n=new _.z8([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;let t=__PRIVATE_getMd5HashValue(e),[r,n]=__PRIVATE_get64BitUints(t);for(let e=0;e<this.hashCount;e++){let t=this.Ee(r,n,e);if(!this.de(t))return!1}return!0}static create(e,t,r){let n=new Uint8Array(Math.ceil(e/8)),i=new BloomFilter(n,e%8==0?0:8-e%8,t);return r.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ie)return;let t=__PRIVATE_getMd5HashValue(e),[r,n]=__PRIVATE_get64BitUints(t);for(let e=0;e<this.hashCount;e++){let t=this.Ee(r,n,e);this.Ae(t)}}Ae(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}};let __PRIVATE_BloomFilterError=class __PRIVATE_BloomFilterError extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RemoteEvent=class RemoteEvent{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,TargetChange.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new RemoteEvent(SnapshotVersion.min(),n,new SortedMap(__PRIVATE_primitiveComparator),I,__PRIVATE_documentKeySet())}};let TargetChange=class TargetChange{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new TargetChange(r,t,__PRIVATE_documentKeySet(),__PRIVATE_documentKeySet(),__PRIVATE_documentKeySet())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_DocumentWatchChange=class __PRIVATE_DocumentWatchChange{constructor(e,t,r,n){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=n}};let __PRIVATE_ExistenceFilterChange=class __PRIVATE_ExistenceFilterChange{constructor(e,t){this.targetId=e,this.me=t}};let __PRIVATE_WatchTargetChange=class __PRIVATE_WatchTargetChange{constructor(e,t,r=ByteString.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}};let __PRIVATE_TargetState=class __PRIVATE_TargetState{constructor(){this.fe=0,this.ge=__PRIVATE_snapshotChangesMap(),this.pe=ByteString.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=__PRIVATE_documentKeySet(),t=__PRIVATE_documentKeySet(),r=__PRIVATE_documentKeySet();return this.ge.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:fail()}}),new TargetChange(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=__PRIVATE_snapshotChangesMap()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||fail()}Ne(){this.we=!0,this.ye=!0}};let __PRIVATE_WatchChangeAggregator=class __PRIVATE_WatchChangeAggregator{constructor(e){this.Le=e,this.Be=new Map,this.ke=I,this.qe=__PRIVATE_documentTargetMap(),this.Qe=new SortedMap(__PRIVATE_primitiveComparator)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:fail()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,r)=>{this.ze(r)&&t(r)})}He(e){let t=e.targetId,r=e.me.count,n=this.Je(t);if(n){let i=n.target;if(__PRIVATE_targetIsDocumentTarget(i)){if(0===r){let e=new DocumentKey(i.path);this.Ue(t,e,MutableDocument.newNoDocument(e,SnapshotVersion.min()))}else 1===r||fail()}else{let n=this.Ye(t);if(n!==r){let r=this.Ze(e),i=r?this.Xe(r,e,n):1;0!==i&&(this.je(t),this.Qe=this.Qe.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Ze(e){let t,r;let n=e.me.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;try{t=__PRIVATE_normalizeByteString(i).toUint8Array()}catch(e){if(e instanceof __PRIVATE_Base64DecodeError)return __PRIVATE_logWarn("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new BloomFilter(t,s,a)}catch(e){return __PRIVATE_logWarn(e instanceof __PRIVATE_BloomFilterError?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Ie?null:r}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){let r=this.Le.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,r,null),n++)}),n}rt(e){let t=new Map;this.Be.forEach((r,n)=>{let i=this.Je(n);if(i){if(r.current&&__PRIVATE_targetIsDocumentTarget(i.target)){let t=new DocumentKey(i.target.path);null!==this.ke.get(t)||this.it(n,t)||this.Ue(n,t,MutableDocument.newNoDocument(t,e))}r.be&&(t.set(n,r.Ce()),r.ve())}});let r=__PRIVATE_documentKeySet();this.qe.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.ke.forEach((t,r)=>r.setReadTime(e));let n=new RemoteEvent(e,t,this.Qe,this.ke,r);return this.ke=I,this.qe=__PRIVATE_documentTargetMap(),this.Qe=new SortedMap(__PRIVATE_primitiveComparator),n}$e(e,t){if(!this.ze(e))return;let r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;let n=this.Ge(e);this.it(e,t)?n.Fe(t,1):n.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new __PRIVATE_TargetState,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new SortedSet(__PRIVATE_primitiveComparator),this.qe=this.qe.insert(e,t)),t}ze(e){let t=null!==this.Je(e);return t||__PRIVATE_logDebug("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new __PRIVATE_TargetState),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function __PRIVATE_documentTargetMap(){return new SortedMap(DocumentKey.comparator)}function __PRIVATE_snapshotChangesMap(){return new SortedMap(DocumentKey.comparator)}let v={asc:"ASCENDING",desc:"DESCENDING"},w={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},S={and:"AND",or:"OR"};let JsonProtoSerializer=class JsonProtoSerializer{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function __PRIVATE_toInt32Proto(e,t){return e.useProto3Json||null==t?t:{value:t}}function toTimestamp(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function __PRIVATE_toBytes(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function __PRIVATE_toVersion(e,t){return toTimestamp(e,t.toTimestamp())}function __PRIVATE_fromVersion(e){return e||fail(),SnapshotVersion.fromTimestamp(function(e){let t=__PRIVATE_normalizeTimestamp(e);return new Timestamp(t.seconds,t.nanos)}(e))}function __PRIVATE_toResourceName(e,t){return __PRIVATE_toResourcePath(e,t).canonicalString()}function __PRIVATE_toResourcePath(e,t){let r=new ResourcePath(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function __PRIVATE_fromResourceName(e){let t=ResourcePath.fromString(e);return __PRIVATE_isValidResourceName(t)||fail(),t}function __PRIVATE_toName(e,t){return __PRIVATE_toResourceName(e.databaseId,t.path)}function fromName(e,t){let r=__PRIVATE_fromResourceName(t);if(r.get(1)!==e.databaseId.projectId)throw new FirestoreError(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new FirestoreError(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new DocumentKey(__PRIVATE_extractLocalPathFromResourceName(r))}function __PRIVATE_toQueryPath(e,t){return __PRIVATE_toResourceName(e.databaseId,t)}function __PRIVATE_fromQueryPath(e){let t=__PRIVATE_fromResourceName(e);return 4===t.length?ResourcePath.emptyPath():__PRIVATE_extractLocalPathFromResourceName(t)}function __PRIVATE_getEncodedDatabaseId(e){return new ResourcePath(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function __PRIVATE_extractLocalPathFromResourceName(e){return e.length>4&&"documents"===e.get(4)||fail(),e.popFirst(5)}function __PRIVATE_toMutationDocument(e,t,r){return{name:__PRIVATE_toName(e,t),fields:r.value.mapValue.fields}}function __PRIVATE_fromWatchChange(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:fail(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||fail(),ByteString.fromBase64String(i||"")):(void 0===i||i instanceof h||i instanceof Uint8Array||fail(),ByteString.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?E.UNKNOWN:__PRIVATE_mapCodeFromRpcCode(e.code);return new FirestoreError(t,e.message||"")}(l);r=new __PRIVATE_WatchTargetChange(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=fromName(e,n.document.name),s=__PRIVATE_fromVersion(n.document.updateTime),a=n.document.createTime?__PRIVATE_fromVersion(n.document.createTime):SnapshotVersion.min(),o=new ObjectValue({mapValue:{fields:n.document.fields}}),l=MutableDocument.newFoundDocument(i,s,a,o),u=n.targetIds||[],c=n.removedTargetIds||[];r=new __PRIVATE_DocumentWatchChange(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=fromName(e,n.document),s=n.readTime?__PRIVATE_fromVersion(n.readTime):SnapshotVersion.min(),a=MutableDocument.newNoDocument(i,s),o=n.removedTargetIds||[];r=new __PRIVATE_DocumentWatchChange([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=fromName(e,n.document),s=n.removedTargetIds||[];r=new __PRIVATE_DocumentWatchChange([],s,i,null)}else{if(!("filter"in t))return fail();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new ExistenceFilter(n,i),a=e.targetId;r=new __PRIVATE_ExistenceFilterChange(a,s)}}return r}function toMutation(e,t){var r;let n;if(t instanceof __PRIVATE_SetMutation)n={update:__PRIVATE_toMutationDocument(e,t.key,t.value)};else if(t instanceof __PRIVATE_DeleteMutation)n={delete:__PRIVATE_toName(e,t.key)};else if(t instanceof __PRIVATE_PatchMutation)n={update:__PRIVATE_toMutationDocument(e,t.key,t.data),updateMask:__PRIVATE_toDocumentMask(t.fieldMask)};else{if(!(t instanceof __PRIVATE_VerifyMutation))return fail();n={verify:__PRIVATE_toName(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof __PRIVATE_ServerTimestampTransform)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof __PRIVATE_ArrayUnionTransformOperation)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof __PRIVATE_ArrayRemoveTransformOperation)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof __PRIVATE_NumericIncrementTransformOperation)return{fieldPath:t.field.canonicalString(),increment:r.Pe};throw fail()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:__PRIVATE_toVersion(e,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:fail()),n}function __PRIVATE_fromWriteResults(e,t){return e&&e.length>0?(void 0!==t||fail(),e.map(e=>{let r;return(r=e.updateTime?__PRIVATE_fromVersion(e.updateTime):__PRIVATE_fromVersion(t)).isEqual(SnapshotVersion.min())&&(r=__PRIVATE_fromVersion(t)),new MutationResult(r,e.transformResults||[])})):[]}function __PRIVATE_toDocumentsTarget(e,t){return{documents:[__PRIVATE_toQueryPath(e,t.path)]}}function __PRIVATE_toQueryTarget(e,t){var r,n;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=__PRIVATE_toQueryPath(e,i);let o=function(e){if(0!==e.length)return __PRIVATE_toFilter(CompositeFilter.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:__PRIVATE_toFieldPathReference(e.field),direction:__PRIVATE_toDirection(e.dir)}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=__PRIVATE_toInt32Proto(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{_t:s,parent:i}}function __PRIVATE_convertQueryTargetToQuery(e){var t;let r,n=__PRIVATE_fromQueryPath(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||fail();let e=i.from[0];e.allDescendants?a=e.collectionId:n=n.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let r=__PRIVATE_fromFilter(e);return r instanceof CompositeFilter&&__PRIVATE_compositeFilterIsFlat(t=r)&&__PRIVATE_compositeFilterIsConjunction(t)?r.getFilters():[r]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new OrderBy(__PRIVATE_fromFieldPathReference(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let c=null;i.startAt&&(c=function(e){let t=!!e.before,r=e.values||[];return new Bound(r,t)}(i.startAt));let _=null;return i.endAt&&(_=function(e){let t=!e.before,r=e.values||[];return new Bound(r,t)}(i.endAt)),__PRIVATE_newQuery(n,a,l,o,u,"F",c,_)}function __PRIVATE_toListenRequestLabels(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fail()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}function __PRIVATE_fromFilter(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=__PRIVATE_fromFieldPathReference(e.unaryFilter.field);return FieldFilter.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=__PRIVATE_fromFieldPathReference(e.unaryFilter.field);return FieldFilter.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=__PRIVATE_fromFieldPathReference(e.unaryFilter.field);return FieldFilter.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=__PRIVATE_fromFieldPathReference(e.unaryFilter.field);return FieldFilter.create(i,"!=",{nullValue:"NULL_VALUE"});default:return fail()}}(e):void 0!==e.fieldFilter?FieldFilter.create(__PRIVATE_fromFieldPathReference(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fail()}}(e.fieldFilter.op),e.fieldFilter.value):void 0!==e.compositeFilter?CompositeFilter.create(e.compositeFilter.filters.map(e=>__PRIVATE_fromFilter(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return fail()}}(e.compositeFilter.op)):fail()}function __PRIVATE_toDirection(e){return v[e]}function __PRIVATE_toOperatorName(e){return w[e]}function __PRIVATE_toCompositeOperatorName(e){return S[e]}function __PRIVATE_toFieldPathReference(e){return{fieldPath:e.canonicalString()}}function __PRIVATE_fromFieldPathReference(e){return FieldPath$1.fromServerFormat(e.fieldPath)}function __PRIVATE_toFilter(e){return e instanceof FieldFilter?function(e){if("=="===e.op){if(__PRIVATE_isNanValue(e.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:"IS_NAN"}};if(__PRIVATE_isNullValue(e.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(__PRIVATE_isNanValue(e.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:"IS_NOT_NAN"}};if(__PRIVATE_isNullValue(e.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:__PRIVATE_toOperatorName(e.op),value:e.value}}}(e):e instanceof CompositeFilter?function(e){let t=e.getFilters().map(e=>__PRIVATE_toFilter(e));return 1===t.length?t[0]:{compositeFilter:{op:__PRIVATE_toCompositeOperatorName(e.op),filters:t}}}(e):fail()}function __PRIVATE_toDocumentMask(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function __PRIVATE_isValidResourceName(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TargetData=class TargetData{constructor(e,t,r,n,i=SnapshotVersion.min(),s=SnapshotVersion.min(),a=ByteString.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new TargetData(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_LocalSerializer=class __PRIVATE_LocalSerializer{constructor(e){this.ut=e}};function __PRIVATE_fromBundledQuery(e){let t=__PRIVATE_convertQueryTargetToQuery({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?__PRIVATE_queryWithLimit(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_FirestoreIndexValueWriter=class __PRIVATE_FirestoreIndexValueWriter{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(__PRIVATE_normalizeNumber(e.integerValue));else if("doubleValue"in e){let r=__PRIVATE_normalizeNumber(e.doubleValue);isNaN(r)?this.Tt(t,13):(this.Tt(t,15),__PRIVATE_isNegativeZero(r)?t.Et(0):t.Et(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Tt(t,20),"string"==typeof r&&(r=__PRIVATE_normalizeTimestamp(r)),t.dt(`${r.seconds||""}`),t.Et(r.nanos||0)}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(__PRIVATE_normalizeByteString(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Tt(t,45),t.Et(r.latitude||0),t.Et(r.longitude||0)}else"mapValue"in e?__PRIVATE_isMaxValue(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):fail()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){let r=e.fields||{};for(let e of(this.Tt(t,55),Object.keys(r)))this.At(e,t),this.Pt(r[e],t)}yt(e,t){let r=e.values||[];for(let e of(this.Tt(t,50),r))this.Pt(e,t)}ft(e,t){this.Tt(t,37),DocumentKey.fromName(e).path.forEach(e=>{this.Tt(t,60),this.wt(e,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}};__PRIVATE_FirestoreIndexValueWriter.St=new __PRIVATE_FirestoreIndexValueWriter;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryIndexManager=class __PRIVATE_MemoryIndexManager{constructor(){this.on=new __PRIVATE_MemoryCollectionParentIndex}addToCollectionParentIndex(e,t){return this.on.add(t),PersistencePromise.resolve()}getCollectionParents(e,t){return PersistencePromise.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return PersistencePromise.resolve()}deleteFieldIndex(e,t){return PersistencePromise.resolve()}deleteAllFieldIndexes(e){return PersistencePromise.resolve()}createTargetIndexes(e,t){return PersistencePromise.resolve()}getDocumentsMatchingTarget(e,t){return PersistencePromise.resolve(null)}getIndexType(e,t){return PersistencePromise.resolve(0)}getFieldIndexes(e,t){return PersistencePromise.resolve([])}getNextCollectionGroupToUpdate(e){return PersistencePromise.resolve(null)}getMinOffset(e,t){return PersistencePromise.resolve(IndexOffset.min())}getMinOffsetFromCollectionGroup(e,t){return PersistencePromise.resolve(IndexOffset.min())}updateCollectionGroup(e,t,r){return PersistencePromise.resolve()}updateIndexEntries(e,t){return PersistencePromise.resolve()}};let __PRIVATE_MemoryCollectionParentIndex=class __PRIVATE_MemoryCollectionParentIndex{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new SortedSet(ResourcePath.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new SortedSet(ResourcePath.comparator)).toArray()}};new Uint8Array(0);let LruParams=class LruParams{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new LruParams(e,LruParams.DEFAULT_COLLECTION_PERCENTILE,LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */LruParams.DEFAULT_COLLECTION_PERCENTILE=10,LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,LruParams.DEFAULT=new LruParams(41943040,LruParams.DEFAULT_COLLECTION_PERCENTILE,LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),LruParams.DISABLED=new LruParams(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_TargetIdGenerator=class __PRIVATE_TargetIdGenerator{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new __PRIVATE_TargetIdGenerator(0)}static Nn(){return new __PRIVATE_TargetIdGenerator(-1)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RemoteDocumentChangeBuffer=class RemoteDocumentChangeBuffer{constructor(){this.changes=new ObjectMap(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,MutableDocument.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?PersistencePromise.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OverlayedDocument=class OverlayedDocument{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let LocalDocumentsView=class LocalDocumentsView{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&__PRIVATE_mutationApplyToLocalView(r.mutation,e,FieldMask.empty(),Timestamp.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,__PRIVATE_documentKeySet()).next(()=>t))}getLocalViewOfDocuments(e,t,r=__PRIVATE_documentKeySet()){let n=__PRIVATE_newDocumentKeyMap();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=documentMap();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=__PRIVATE_newDocumentKeyMap();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,__PRIVATE_documentKeySet()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=I,s=__PRIVATE_newDocumentKeyMap(),a=__PRIVATE_newDocumentKeyMap();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof __PRIVATE_PatchMutation)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),__PRIVATE_mutationApplyToLocalView(a.mutation,t,a.mutation.getFieldMask(),Timestamp.now())):s.set(t.key,FieldMask.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new OverlayedDocument(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=__PRIVATE_newDocumentKeyMap(),n=new SortedMap((e,t)=>e-t),i=__PRIVATE_documentKeySet();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||FieldMask.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||__PRIVATE_documentKeySet()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=__PRIVATE_newDocumentKeyMap();l.forEach(e=>{if(!i.has(e)){let n=__PRIVATE_calculateOverlayMutation(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return PersistencePromise.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return DocumentKey.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):__PRIVATE_isCollectionGroupQuery(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):PersistencePromise.resolve(__PRIVATE_newDocumentKeyMap()),a=-1,o=i;return s.next(t=>PersistencePromise.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?PersistencePromise.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,__PRIVATE_documentKeySet())).next(e=>({batchId:a,changes:__PRIVATE_convertOverlayedDocumentMapToDocumentMap(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new DocumentKey(t)).next(e=>{let t=documentMap();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=documentMap();return this.indexManager.getCollectionParents(e,i).next(a=>PersistencePromise.forEach(a,a=>{let o=new __PRIVATE_QueryImpl(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,MutableDocument.newInvalidDocument(n)))});let r=documentMap();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&__PRIVATE_mutationApplyToLocalView(s.mutation,n,FieldMask.empty(),Timestamp.now()),__PRIVATE_queryMatches(t,n)&&(r=r.insert(e,n))}),r})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryBundleCache=class __PRIVATE_MemoryBundleCache{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return PersistencePromise.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,{id:t.id,version:t.version,createTime:__PRIVATE_fromVersion(t.createTime)}),PersistencePromise.resolve()}getNamedQuery(e,t){return PersistencePromise.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,{name:t.name,query:__PRIVATE_fromBundledQuery(t.bundledQuery),readTime:__PRIVATE_fromVersion(t.readTime)}),PersistencePromise.resolve()}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryDocumentOverlayCache=class __PRIVATE_MemoryDocumentOverlayCache{constructor(){this.overlays=new SortedMap(DocumentKey.comparator),this.lr=new Map}getOverlay(e,t){return PersistencePromise.resolve(this.overlays.get(t))}getOverlays(e,t){let r=__PRIVATE_newDocumentKeyMap();return PersistencePromise.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.lt(e,t,n)}),PersistencePromise.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.lr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.lr.delete(r)),PersistencePromise.resolve()}getOverlaysForCollection(e,t,r){let n=__PRIVATE_newDocumentKeyMap(),i=t.length+1,s=new DocumentKey(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return PersistencePromise.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new SortedMap((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=__PRIVATE_newDocumentKeyMap(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=__PRIVATE_newDocumentKeyMap(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return PersistencePromise.resolve(a)}lt(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.lr.get(n.largestBatchId).delete(r.key);this.lr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new Overlay(t,r));let i=this.lr.get(t);void 0===i&&(i=__PRIVATE_documentKeySet(),this.lr.set(t,i)),this.lr.set(t,i.add(r.key))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_ReferenceSet=class __PRIVATE_ReferenceSet{constructor(){this.hr=new SortedSet(__PRIVATE_DocReference.Pr),this.Ir=new SortedSet(__PRIVATE_DocReference.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){let r=new __PRIVATE_DocReference(e,t);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.dr(new __PRIVATE_DocReference(e,t))}Ar(e,t){e.forEach(e=>this.removeReference(e,t))}Rr(e){let t=new DocumentKey(new ResourcePath([])),r=new __PRIVATE_DocReference(t,e),n=new __PRIVATE_DocReference(t,e+1),i=[];return this.Ir.forEachInRange([r,n],e=>{this.dr(e),i.push(e.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){let t=new DocumentKey(new ResourcePath([])),r=new __PRIVATE_DocReference(t,e),n=new __PRIVATE_DocReference(t,e+1),i=__PRIVATE_documentKeySet();return this.Ir.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new __PRIVATE_DocReference(e,0),r=this.hr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}};let __PRIVATE_DocReference=class __PRIVATE_DocReference{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return DocumentKey.comparator(e.key,t.key)||__PRIVATE_primitiveComparator(e.gr,t.gr)}static Tr(e,t){return __PRIVATE_primitiveComparator(e.gr,t.gr)||DocumentKey.comparator(e.key,t.key)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryMutationQueue=class __PRIVATE_MemoryMutationQueue{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new SortedSet(__PRIVATE_DocReference.Pr)}checkEmpty(e){return PersistencePromise.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new MutationBatch(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.yr=this.yr.add(new __PRIVATE_DocReference(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return PersistencePromise.resolve(s)}lookupMutationBatch(e,t){return PersistencePromise.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Sr(t+1),n=r<0?0:r;return PersistencePromise.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return PersistencePromise.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return PersistencePromise.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new __PRIVATE_DocReference(t,0),n=new __PRIVATE_DocReference(t,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,n],e=>{let t=this.wr(e.gr);i.push(t)}),PersistencePromise.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new SortedSet(__PRIVATE_primitiveComparator);return t.forEach(e=>{let t=new __PRIVATE_DocReference(e,0),n=new __PRIVATE_DocReference(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,n],e=>{r=r.add(e.gr)})}),PersistencePromise.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;DocumentKey.isDocumentKey(i)||(i=i.child(""));let s=new __PRIVATE_DocReference(new DocumentKey(i),0),a=new SortedSet(__PRIVATE_primitiveComparator);return this.yr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.gr)),!0)},s),PersistencePromise.resolve(this.br(a))}br(e){let t=[];return e.forEach(e=>{let r=this.wr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Dr(t.batchId,"removed")||fail(),this.mutationQueue.shift();let r=this.yr;return PersistencePromise.forEach(t.mutations,n=>{let i=new __PRIVATE_DocReference(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,t){let r=new __PRIVATE_DocReference(t,0),n=this.yr.firstAfterOrEqual(r);return PersistencePromise.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,PersistencePromise.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){let t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryRemoteDocumentCacheImpl=class __PRIVATE_MemoryRemoteDocumentCacheImpl{constructor(e){this.Cr=e,this.docs=new SortedMap(DocumentKey.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Cr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return PersistencePromise.resolve(r?r.document.mutableCopy():MutableDocument.newInvalidDocument(t))}getEntries(e,t){let r=I;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():MutableDocument.newInvalidDocument(e))}),PersistencePromise.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=I,s=t.path,a=new DocumentKey(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=__PRIVATE_indexOffsetComparator(__PRIVATE_newIndexOffsetFromDocument(a),r)||(n.has(a.key)||__PRIVATE_queryMatches(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return PersistencePromise.resolve(i)}getAllFromCollectionGroup(e,t,r,n){fail()}vr(e,t){return PersistencePromise.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this)}getSize(e){return PersistencePromise.resolve(this.size)}};let __PRIVATE_MemoryRemoteDocumentChangeBuffer=class __PRIVATE_MemoryRemoteDocumentChangeBuffer extends RemoteDocumentChangeBuffer{constructor(e){super(),this._r=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this._r.addEntry(e,n)):this._r.removeEntry(r)}),PersistencePromise.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryTargetCache=class __PRIVATE_MemoryTargetCache{constructor(e){this.persistence=e,this.Fr=new ObjectMap(e=>__PRIVATE_canonifyTarget(e),__PRIVATE_targetEquals),this.lastRemoteSnapshotVersion=SnapshotVersion.min(),this.highestTargetId=0,this.Mr=0,this.Or=new __PRIVATE_ReferenceSet,this.targetCount=0,this.Nr=__PRIVATE_TargetIdGenerator.On()}forEachTarget(e,t){return this.Fr.forEach((e,r)=>t(r)),PersistencePromise.resolve()}getLastRemoteSnapshotVersion(e){return PersistencePromise.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return PersistencePromise.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),PersistencePromise.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Mr&&(this.Mr=t),PersistencePromise.resolve()}kn(e){this.Fr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Nr=new __PRIVATE_TargetIdGenerator(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,PersistencePromise.resolve()}updateTargetData(e,t){return this.kn(t),PersistencePromise.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,PersistencePromise.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Fr.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),PersistencePromise.waitFor(i).next(()=>n)}getTargetCount(e){return PersistencePromise.resolve(this.targetCount)}getTargetData(e,t){let r=this.Fr.get(t)||null;return PersistencePromise.resolve(r)}addMatchingKeys(e,t,r){return this.Or.Er(t,r),PersistencePromise.resolve()}removeMatchingKeys(e,t,r){this.Or.Ar(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),PersistencePromise.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),PersistencePromise.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Or.mr(t);return PersistencePromise.resolve(r)}containsKey(e,t){return PersistencePromise.resolve(this.Or.containsKey(t))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryPersistence=class __PRIVATE_MemoryPersistence{constructor(e,t){this.Lr={},this.overlays={},this.Br=new __PRIVATE_ListenSequence(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new __PRIVATE_MemoryTargetCache(this),this.indexManager=new __PRIVATE_MemoryIndexManager,this.remoteDocumentCache=new __PRIVATE_MemoryRemoteDocumentCacheImpl(e=>this.referenceDelegate.Qr(e)),this.serializer=new __PRIVATE_LocalSerializer(t),this.Kr=new __PRIVATE_MemoryBundleCache(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new __PRIVATE_MemoryDocumentOverlayCache,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Lr[e.toKey()];return r||(r=new __PRIVATE_MemoryMutationQueue(t,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,r){__PRIVATE_logDebug("MemoryPersistence","Starting transaction:",e);let n=new __PRIVATE_MemoryTransaction(this.Br.next());return this.referenceDelegate.$r(),r(n).next(e=>this.referenceDelegate.Ur(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Wr(e,t){return PersistencePromise.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,t)))}};let __PRIVATE_MemoryTransaction=class __PRIVATE_MemoryTransaction extends PersistenceTransaction{constructor(e){super(),this.currentSequenceNumber=e}};let __PRIVATE_MemoryEagerDelegate=class __PRIVATE_MemoryEagerDelegate{constructor(e){this.persistence=e,this.Gr=new __PRIVATE_ReferenceSet,this.zr=null}static jr(e){return new __PRIVATE_MemoryEagerDelegate(e)}get Hr(){if(this.zr)return this.zr;throw fail()}addReference(e,t,r){return this.Gr.addReference(r,t),this.Hr.delete(r.toString()),PersistencePromise.resolve()}removeReference(e,t,r){return this.Gr.removeReference(r,t),this.Hr.add(r.toString()),PersistencePromise.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),PersistencePromise.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(e=>this.Hr.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Hr.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return PersistencePromise.forEach(this.Hr,r=>{let n=DocumentKey.fromPath(r);return this.Jr(e,n).next(e=>{e||t.removeEntry(n,SnapshotVersion.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return PersistencePromise.or([()=>PersistencePromise.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_LocalViewChanges=class __PRIVATE_LocalViewChanges{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.ki=r,this.qi=n}static Qi(e,t){let r=__PRIVATE_documentKeySet(),n=__PRIVATE_documentKeySet();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new __PRIVATE_LocalViewChanges(e,t.fromCache,r,n)}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QueryContext=class QueryContext{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_QueryEngine=class __PRIVATE_QueryEngine{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=(0,c.G6)()?8:__PRIVATE_getAndroidVersion((0,c.z$)())>0?6:4}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.zi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ji(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new QueryContext;return this.Hi(e,t,r).next(n=>{if(i.result=n,this.$i)return this.Ji(e,t,r,n.size)})}).next(()=>i.result)}Ji(e,t,r,n){return r.documentReadCount<this.Ui?(__PRIVATE_getLogLevel()<=u.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","SDK will not create cache indexes for query:",__PRIVATE_stringifyQuery(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),PersistencePromise.resolve()):(__PRIVATE_getLogLevel()<=u.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","Query:",__PRIVATE_stringifyQuery(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.Wi*n?(__PRIVATE_getLogLevel()<=u.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","The SDK decides to create cache indexes for query:",__PRIVATE_stringifyQuery(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,__PRIVATE_queryToTarget(t))):PersistencePromise.resolve())}zi(e,t){if(__PRIVATE_queryMatchesAllDocuments(t))return PersistencePromise.resolve(null);let r=__PRIVATE_queryToTarget(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=__PRIVATE_queryToTarget(t=__PRIVATE_queryWithLimit(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=__PRIVATE_documentKeySet(...n);return this.Gi.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.Yi(t,n);return this.Zi(t,s,i,r.readTime)?this.zi(e,__PRIVATE_queryWithLimit(t,null,"F")):this.Xi(e,s,t,r)}))})))}ji(e,t,r,n){return __PRIVATE_queryMatchesAllDocuments(t)||n.isEqual(SnapshotVersion.min())?PersistencePromise.resolve(null):this.Gi.getDocuments(e,r).next(i=>{let s=this.Yi(t,i);return this.Zi(t,s,r,n)?PersistencePromise.resolve(null):(__PRIVATE_getLogLevel()<=u.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),__PRIVATE_stringifyQuery(t)),this.Xi(e,s,t,__PRIVATE_newIndexOffsetSuccessorFromReadTime(n,-1)).next(e=>e))})}Yi(e,t){let r=new SortedSet(__PRIVATE_newQueryComparator(e));return t.forEach((t,n)=>{__PRIVATE_queryMatches(e,n)&&(r=r.add(n))}),r}Zi(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Hi(e,t,r){return __PRIVATE_getLogLevel()<=u.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","Using full collection scan to execute query:",__PRIVATE_stringifyQuery(t)),this.Gi.getDocumentsMatchingQuery(e,t,IndexOffset.min(),r)}Xi(e,t,r,n){return this.Gi.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_LocalStoreImpl=class __PRIVATE_LocalStoreImpl{constructor(e,t,r,n){this.persistence=e,this.es=t,this.serializer=n,this.ts=new SortedMap(__PRIVATE_primitiveComparator),this.ns=new ObjectMap(e=>__PRIVATE_canonifyTarget(e),__PRIVATE_targetEquals),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LocalDocumentsView(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}};function __PRIVATE_newLocalStore(e,t,r,n){return new __PRIVATE_LocalStoreImpl(e,t,r,n)}async function __PRIVATE_localStoreHandleUserChange(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=__PRIVATE_documentKeySet();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({_s:e,removedBatchIds:i,addedBatchIds:s}))})})}function __PRIVATE_localStoreAcknowledgeBatch(e,t){return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let n=t.batch.keys(),i=e.ss.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),a=PersistencePromise.resolve();return s.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||fail(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,n,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(e){let t=__PRIVATE_documentKeySet();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>e.localDocuments.getDocuments(r,n))})}function __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function __PRIVATE_localStoreApplyRemoteEventToLocalCache(e,t){let r=t.snapshotVersion,n=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let s=e.ss.newChangeBuffer({trackRemovals:!0});n=e.ts;let a=[];t.targetChanges.forEach((s,o)=>{var l;let u=n.get(o);if(!u)return;a.push(e.qr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.qr.addMatchingKeys(i,s.addedDocuments,o)));let c=u.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(ByteString.EMPTY_BYTE_STRING,SnapshotVersion.min()).withLastLimboFreeSnapshotVersion(SnapshotVersion.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),n=n.insert(o,c),l=c,(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&a.push(e.qr.updateTargetData(i,c))});let o=I,l=__PRIVATE_documentKeySet();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),a.push(__PRIVATE_populateDocumentChangeBuffer(i,s,t.documentUpdates).next(e=>{o=e.us,l=e.cs})),!r.isEqual(SnapshotVersion.min())){let t=e.qr.getLastRemoteSnapshotVersion(i).next(t=>e.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(t)}return PersistencePromise.waitFor(a).next(()=>s.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,o,l)).next(()=>o)}).then(t=>(e.ts=n,t))}function __PRIVATE_populateDocumentChangeBuffer(e,t,r){let n=__PRIVATE_documentKeySet(),i=__PRIVATE_documentKeySet();return r.forEach(e=>n=n.add(e)),t.getEntries(e,n).next(e=>{let n=I;return r.forEach((r,s)=>{let a=e.get(r);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(r)),s.isNoDocument()&&s.version.isEqual(SnapshotVersion.min())?(t.removeEntry(r,s.readTime),n=n.insert(r,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),n=n.insert(r,s)):__PRIVATE_logDebug("LocalStore","Ignoring outdated watch update for ",r,". Current version:",a.version," Watch version:",s.version)}),{us:n,cs:i}})}function __PRIVATE_localStoreGetNextMutationBatch(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function __PRIVATE_localStoreAllocateTarget(e,t){return e.persistence.runTransaction("Allocate target","readwrite",r=>{let n;return e.qr.getTargetData(r,t).next(i=>i?(n=i,PersistencePromise.resolve(n)):e.qr.allocateTargetId(r).next(i=>(n=new TargetData(t,i,"TargetPurposeListen",r.currentSequenceNumber),e.qr.addTargetData(r,n).next(()=>n))))}).then(r=>{let n=e.ts.get(r.targetId);return(null===n||r.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(e.ts=e.ts.insert(r.targetId,r),e.ns.set(t,r.targetId)),r})}async function __PRIVATE_localStoreReleaseTarget(e,t,r){let n=e.ts.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!__PRIVATE_isIndexedDbTransactionError(e))throw e;__PRIVATE_logDebug("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ts=e.ts.remove(t),e.ns.delete(n.target)}function __PRIVATE_localStoreExecuteQuery(e,t,r){let n=SnapshotVersion.min(),i=__PRIVATE_documentKeySet();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.ns.get(r);return void 0!==n?PersistencePromise.resolve(e.ts.get(n)):e.qr.getTargetData(t,r)})(e,s,__PRIVATE_queryToTarget(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.es.getDocumentsMatchingQuery(s,t,r?n:SnapshotVersion.min(),r?i:__PRIVATE_documentKeySet())).next(r=>(__PRIVATE_setMaxReadTime(e,__PRIVATE_queryCollectionGroup(t),r),{documents:r,ls:i})))}function __PRIVATE_setMaxReadTime(e,t,r){let n=e.rs.get(t)||SnapshotVersion.min();r.forEach((e,t)=>{t.readTime.compareTo(n)>0&&(n=t.readTime)}),e.rs.set(t,n)}let __PRIVATE_LocalClientState=class __PRIVATE_LocalClientState{constructor(){this.activeTargetIds=__PRIVATE_targetIdSet()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};let __PRIVATE_MemorySharedClientState=class __PRIVATE_MemorySharedClientState{constructor(){this.eo=new __PRIVATE_LocalClientState,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,r){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new __PRIVATE_LocalClientState,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_NoopConnectivityMonitor=class __PRIVATE_NoopConnectivityMonitor{ro(e){}shutdown(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_BrowserConnectivityMonitor=class __PRIVATE_BrowserConnectivityMonitor{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){for(let e of(__PRIVATE_logDebug("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.ao))e(0)}_o(){for(let e of(__PRIVATE_logDebug("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.ao))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D=null;function __PRIVATE_generateUniqueDebugId(){return null===D?D=268435456+Math.round(2147483648*Math.random()):D++,"0x"+D.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_StreamBridge=class __PRIVATE_StreamBridge{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b="WebChannelConnection";let __PRIVATE_WebChannelConnection=class __PRIVATE_WebChannelConnection extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.yo=t+"://"+e.host,this.wo=`projects/${r}/databases/${n}`,this.So="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get bo(){return!1}Do(e,t,r,n,i){let s=__PRIVATE_generateUniqueDebugId(),a=this.Co(e,t.toUriEncodedString());__PRIVATE_logDebug("RestConnection",`Sending RPC '${e}' ${s}:`,a,r);let o={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(o,n,i),this.Fo(e,a,o,r).then(t=>(__PRIVATE_logDebug("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw __PRIVATE_logWarn("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}Mo(e,t,r,n,i,s){return this.Do(e,t,r,n,i)}vo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+m}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}Co(e,t){let r=C[e];return`${this.yo}/v1/${t}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,t,r,n){let i=__PRIVATE_generateUniqueDebugId();return new Promise((s,a)=>{let o=new _.JJ;o.setWithCredentials(!0),o.listenOnce(_.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case _.jK.NO_ERROR:let t=o.getResponseJson();__PRIVATE_logDebug(b,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case _.jK.TIMEOUT:__PRIVATE_logDebug(b,`RPC '${e}' ${i} timed out`),a(new FirestoreError(E.DEADLINE_EXCEEDED,"Request time out"));break;case _.jK.HTTP_ERROR:let r=o.getStatus();if(__PRIVATE_logDebug(b,`RPC '${e}' ${i} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);a(new FirestoreError(e,t.message))}else a(new FirestoreError(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new FirestoreError(E.UNAVAILABLE,"Connection failed."));break;default:fail()}}finally{__PRIVATE_logDebug(b,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);__PRIVATE_logDebug(b,`RPC '${e}' ${i} sending request:`,n),o.send(t,"POST",l,r,15)})}xo(e,t,r){let i=__PRIVATE_generateUniqueDebugId(),s=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,_.UE)(),o=(0,_.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new _.zI({})),this.vo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let c=s.join("");__PRIVATE_logDebug(b,`Creating RPC '${e}' stream ${i}: ${c}`,l);let h=a.createWebChannel(c,l),d=!1,m=!1,f=new __PRIVATE_StreamBridge({co:t=>{m?__PRIVATE_logDebug(b,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(__PRIVATE_logDebug(b,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),__PRIVATE_logDebug(b,`RPC '${e}' stream ${i} sending:`,t),h.send(t))},lo:()=>h.close()}),__PRIVATE_unguardedEventListen=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return __PRIVATE_unguardedEventListen(h,_.ii.EventType.OPEN,()=>{m||(__PRIVATE_logDebug(b,`RPC '${e}' stream ${i} transport opened.`),f.Vo())}),__PRIVATE_unguardedEventListen(h,_.ii.EventType.CLOSE,()=>{m||(m=!0,__PRIVATE_logDebug(b,`RPC '${e}' stream ${i} transport closed`),f.fo())}),__PRIVATE_unguardedEventListen(h,_.ii.EventType.ERROR,t=>{m||(m=!0,__PRIVATE_logWarn(b,`RPC '${e}' stream ${i} transport errored:`,t),f.fo(new FirestoreError(E.UNAVAILABLE,"The operation could not be completed")))}),__PRIVATE_unguardedEventListen(h,_.ii.EventType.MESSAGE,t=>{var r;if(!m){let s=t.data[0];s||fail();let a=s.error||(null===(r=s[0])||void 0===r?void 0:r.error);if(a){__PRIVATE_logDebug(b,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,r=function(e){let t=n[e];if(void 0!==t)return __PRIVATE_mapCodeFromRpcCode(t)}(t),s=a.message;void 0===r&&(r=E.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,f.fo(new FirestoreError(r,s)),h.close()}else __PRIVATE_logDebug(b,`RPC '${e}' stream ${i} received:`,s),f.po(s)}}),__PRIVATE_unguardedEventListen(o,_.ju.STAT_EVENT,t=>{t.stat===_.kN.PROXY?__PRIVATE_logDebug(b,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===_.kN.NOPROXY&&__PRIVATE_logDebug(b,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.mo()},0),f}};function getDocument(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_newSerializer(e){return new JsonProtoSerializer(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_ExponentialBackoff=class __PRIVATE_ExponentialBackoff{constructor(e,t,r=1e3,n=1.5,i=6e4){this.si=e,this.timerId=t,this.Oo=r,this.No=n,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();let t=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),n=Math.max(0,t-r);n>0&&__PRIVATE_logDebug("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,n,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){null!==this.ko&&(this.ko.skipDelay(),this.ko=null)}cancel(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_PersistentStream=class __PRIVATE_PersistentStream{constructor(e,t,r,n,i,s,a,o){this.si=e,this.Wo=r,this.Go=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new __PRIVATE_ExponentialBackoff(e,t)}Yo(){return 1===this.state||5===this.state||this.Zo()}Zo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&null===this.jo&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,t){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,4!==e?this.Jo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(__PRIVATE_logError(t.toString()),__PRIVATE_logError("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}o_(){}auth(){this.state=1;let e=this.__(this.zo),t=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.zo===t&&this.a_(e,r)},t=>{e(()=>{let e=new FirestoreError(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.u_(e)})})}a_(e,t){let r=this.__(this.zo);this.stream=this.c_(e,t),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(e=>{r(()=>this.u_(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return __PRIVATE_logDebug("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return t=>{this.si.enqueueAndForget(()=>this.zo===e?t():(__PRIVATE_logDebug("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}};let __PRIVATE_PersistentListenStream=class __PRIVATE_PersistentListenStream extends __PRIVATE_PersistentStream{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}c_(e,t){return this.connection.xo("Listen",e,t)}onMessage(e){this.Jo.reset();let t=__PRIVATE_fromWatchChange(this.serializer,e),r=function(e){if(!("targetChange"in e))return SnapshotVersion.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?SnapshotVersion.min():t.readTime?__PRIVATE_fromVersion(t.readTime):SnapshotVersion.min()}(e);return this.listener.l_(t,r)}h_(e){let t={};t.database=__PRIVATE_getEncodedDatabaseId(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=__PRIVATE_targetIsDocumentTarget(n)?{documents:__PRIVATE_toDocumentsTarget(e,n)}:{query:__PRIVATE_toQueryTarget(e,n)._t}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=__PRIVATE_toBytes(e,t.resumeToken);let n=__PRIVATE_toInt32Proto(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(SnapshotVersion.min())>0){r.readTime=toTimestamp(e,t.snapshotVersion.toTimestamp());let n=__PRIVATE_toInt32Proto(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=__PRIVATE_toListenRequestLabels(this.serializer,e);r&&(t.labels=r),this.r_(t)}P_(e){let t={};t.database=__PRIVATE_getEncodedDatabaseId(this.serializer),t.removeTarget=e,this.r_(t)}};let __PRIVATE_PersistentWriteStream=class __PRIVATE_PersistentWriteStream extends __PRIVATE_PersistentStream{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,t){return this.connection.xo("Write",e,t)}onMessage(e){if(e.streamToken||fail(),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();let t=__PRIVATE_fromWriteResults(e.writeResults,e.commitTime),r=__PRIVATE_fromVersion(e.commitTime);return this.listener.d_(r,t)}return e.writeResults&&0!==e.writeResults.length&&fail(),this.I_=!0,this.listener.A_()}R_(){let e={};e.database=__PRIVATE_getEncodedDatabaseId(this.serializer),this.r_(e)}E_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>toMutation(this.serializer,e))};this.r_(t)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_DatastoreImpl=class __PRIVATE_DatastoreImpl extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.V_=!1}m_(){if(this.V_)throw new FirestoreError(E.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,t,r,n){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Do(e,__PRIVATE_toResourcePath(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new FirestoreError(E.UNKNOWN,e.toString())})}Mo(e,t,r,n,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,__PRIVATE_toResourcePath(t,r),n,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new FirestoreError(E.UNKNOWN,e.toString())})}terminate(){this.V_=!0,this.connection.terminate()}};let __PRIVATE_OnlineStateTracker=class __PRIVATE_OnlineStateTracker{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){0===this.g_&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){"Online"===this.state?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,"Online"===e&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(__PRIVATE_logError(t),this.y_=!1):__PRIVATE_logDebug("OnlineStateTracker",t)}C_(){null!==this.p_&&(this.p_.cancel(),this.p_=null)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_RemoteStoreImpl=class __PRIVATE_RemoteStoreImpl{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(e=>{r.enqueueAndForget(async()=>{__PRIVATE_canUseNetwork(this)&&(__PRIVATE_logDebug("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.M_.add(4),await __PRIVATE_disableNetworkInternal(e),e.N_.set("Unknown"),e.M_.delete(4),await __PRIVATE_enableNetworkInternal(e)}(this))})}),this.N_=new __PRIVATE_OnlineStateTracker(r,n)}};async function __PRIVATE_enableNetworkInternal(e){if(__PRIVATE_canUseNetwork(e))for(let t of e.x_)await t(!0)}async function __PRIVATE_disableNetworkInternal(e){for(let t of e.x_)await t(!1)}function __PRIVATE_remoteStoreListen(e,t){e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),__PRIVATE_shouldStartWatchStream(e)?__PRIVATE_startWatchStream(e):__PRIVATE_ensureWatchStream(e).Zo()&&__PRIVATE_sendWatchRequest(e,t))}function __PRIVATE_remoteStoreUnlisten(e,t){let r=__PRIVATE_ensureWatchStream(e);e.F_.delete(t),r.Zo()&&__PRIVATE_sendUnwatchRequest(e,t),0===e.F_.size&&(r.Zo()?r.t_():__PRIVATE_canUseNetwork(e)&&e.N_.set("Unknown"))}function __PRIVATE_sendWatchRequest(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(SnapshotVersion.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}__PRIVATE_ensureWatchStream(e).h_(t)}function __PRIVATE_sendUnwatchRequest(e,t){e.L_.xe(t),__PRIVATE_ensureWatchStream(e).P_(t)}function __PRIVATE_startWatchStream(e){e.L_=new __PRIVATE_WatchChangeAggregator({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),__PRIVATE_ensureWatchStream(e).start(),e.N_.w_()}function __PRIVATE_shouldStartWatchStream(e){return __PRIVATE_canUseNetwork(e)&&!__PRIVATE_ensureWatchStream(e).Yo()&&e.F_.size>0}function __PRIVATE_canUseNetwork(e){return 0===e.M_.size}async function __PRIVATE_onWatchStreamConnected(e){e.N_.set("Online")}async function __PRIVATE_onWatchStreamOpen(e){e.F_.forEach((t,r)=>{__PRIVATE_sendWatchRequest(e,t)})}async function __PRIVATE_onWatchStreamClose(e,t){e.L_=void 0,__PRIVATE_shouldStartWatchStream(e)?(e.N_.D_(t),__PRIVATE_startWatchStream(e)):e.N_.set("Unknown")}async function __PRIVATE_onWatchStreamChange(e,t,r){if(e.N_.set("Online"),t instanceof __PRIVATE_WatchTargetChange&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.F_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.F_.delete(n),e.L_.removeTarget(n))}(e,t)}catch(r){__PRIVATE_logDebug("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await __PRIVATE_disableNetworkUntilRecovery(e,r)}else if(t instanceof __PRIVATE_DocumentWatchChange?e.L_.Ke(t):t instanceof __PRIVATE_ExistenceFilterChange?e.L_.He(t):e.L_.We(t),!r.isEqual(SnapshotVersion.min()))try{let t=await __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.L_.rt(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.F_.get(n);i&&e.F_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.F_.get(t);if(!n)return;e.F_.set(t,n.withResumeToken(ByteString.EMPTY_BYTE_STRING,n.snapshotVersion)),__PRIVATE_sendUnwatchRequest(e,t);let i=new TargetData(n.target,t,r,n.sequenceNumber);__PRIVATE_sendWatchRequest(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){__PRIVATE_logDebug("RemoteStore","Failed to raise snapshot:",t),await __PRIVATE_disableNetworkUntilRecovery(e,t)}}async function __PRIVATE_disableNetworkUntilRecovery(e,t,r){if(!__PRIVATE_isIndexedDbTransactionError(t))throw t;e.M_.add(1),await __PRIVATE_disableNetworkInternal(e),e.N_.set("Offline"),r||(r=()=>__PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{__PRIVATE_logDebug("RemoteStore","Retrying IndexedDB access"),await r(),e.M_.delete(1),await __PRIVATE_enableNetworkInternal(e)})}function __PRIVATE_executeWithRecovery(e,t){return t().catch(r=>__PRIVATE_disableNetworkUntilRecovery(e,r,t))}async function __PRIVATE_fillWritePipeline(e){let t=__PRIVATE_ensureWriteStream(e),r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;__PRIVATE_canAddToWritePipeline(e);)try{let n=await __PRIVATE_localStoreGetNextMutationBatch(e.localStore,r);if(null===n){0===e.v_.length&&t.t_();break}r=n.batchId,__PRIVATE_addToWritePipeline(e,n)}catch(t){await __PRIVATE_disableNetworkUntilRecovery(e,t)}__PRIVATE_shouldStartWriteStream(e)&&__PRIVATE_startWriteStream(e)}function __PRIVATE_canAddToWritePipeline(e){return __PRIVATE_canUseNetwork(e)&&e.v_.length<10}function __PRIVATE_addToWritePipeline(e,t){e.v_.push(t);let r=__PRIVATE_ensureWriteStream(e);r.Zo()&&r.T_&&r.E_(t.mutations)}function __PRIVATE_shouldStartWriteStream(e){return __PRIVATE_canUseNetwork(e)&&!__PRIVATE_ensureWriteStream(e).Yo()&&e.v_.length>0}function __PRIVATE_startWriteStream(e){__PRIVATE_ensureWriteStream(e).start()}async function __PRIVATE_onWriteStreamOpen(e){__PRIVATE_ensureWriteStream(e).R_()}async function __PRIVATE_onWriteHandshakeComplete(e){let t=__PRIVATE_ensureWriteStream(e);for(let r of e.v_)t.E_(r.mutations)}async function __PRIVATE_onMutationResult(e,t,r){let n=e.v_.shift(),i=MutationBatchResult.from(n,t,r);await __PRIVATE_executeWithRecovery(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await __PRIVATE_fillWritePipeline(e)}async function __PRIVATE_onWriteStreamClose(e,t){t&&__PRIVATE_ensureWriteStream(e).T_&&await async function(e,t){var r;if(__PRIVATE_isPermanentError(r=t.code)&&r!==E.ABORTED){let r=e.v_.shift();__PRIVATE_ensureWriteStream(e).e_(),await __PRIVATE_executeWithRecovery(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await __PRIVATE_fillWritePipeline(e)}}(e,t),__PRIVATE_shouldStartWriteStream(e)&&__PRIVATE_startWriteStream(e)}async function __PRIVATE_remoteStoreHandleCredentialChange(e,t){e.asyncQueue.verifyOperationInProgress(),__PRIVATE_logDebug("RemoteStore","RemoteStore received new credentials");let r=__PRIVATE_canUseNetwork(e);e.M_.add(3),await __PRIVATE_disableNetworkInternal(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await __PRIVATE_enableNetworkInternal(e)}async function __PRIVATE_remoteStoreApplyPrimaryState(e,t){t?(e.M_.delete(2),await __PRIVATE_enableNetworkInternal(e)):t||(e.M_.add(2),await __PRIVATE_disableNetworkInternal(e),e.N_.set("Unknown"))}function __PRIVATE_ensureWatchStream(e){var t,r,n;return e.B_||(e.B_=(t=e.datastore,r=e.asyncQueue,n={ho:__PRIVATE_onWatchStreamConnected.bind(null,e),Io:__PRIVATE_onWatchStreamOpen.bind(null,e),Eo:__PRIVATE_onWatchStreamClose.bind(null,e),l_:__PRIVATE_onWatchStreamChange.bind(null,e)},t.m_(),new __PRIVATE_PersistentListenStream(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.x_.push(async t=>{t?(e.B_.e_(),__PRIVATE_shouldStartWatchStream(e)?__PRIVATE_startWatchStream(e):e.N_.set("Unknown")):(await e.B_.stop(),e.L_=void 0)})),e.B_}function __PRIVATE_ensureWriteStream(e){var t,r,n;return e.k_||(e.k_=(t=e.datastore,r=e.asyncQueue,n={ho:()=>Promise.resolve(),Io:__PRIVATE_onWriteStreamOpen.bind(null,e),Eo:__PRIVATE_onWriteStreamClose.bind(null,e),A_:__PRIVATE_onWriteHandshakeComplete.bind(null,e),d_:__PRIVATE_onMutationResult.bind(null,e)},t.m_(),new __PRIVATE_PersistentWriteStream(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.x_.push(async t=>{t?(e.k_.e_(),await __PRIVATE_fillWritePipeline(e)):(await e.k_.stop(),e.v_.length>0&&(__PRIVATE_logDebug("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))})),e.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DelayedOperation=class DelayedOperation{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new __PRIVATE_Deferred,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=Date.now()+r,a=new DelayedOperation(e,t,s,n,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new FirestoreError(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function __PRIVATE_wrapInUserErrorIfRecoverable(e,t){if(__PRIVATE_logError("AsyncQueue",`${t}: ${e}`),__PRIVATE_isIndexedDbTransactionError(e))return new FirestoreError(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DocumentSet=class DocumentSet{constructor(e){this.comparator=e?(t,r)=>e(t,r)||DocumentKey.comparator(t.key,r.key):(e,t)=>DocumentKey.comparator(e.key,t.key),this.keyedMap=documentMap(),this.sortedSet=new SortedMap(this.comparator)}static emptySet(e){return new DocumentSet(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof DocumentSet)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new DocumentSet;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_DocumentChangeSet=class __PRIVATE_DocumentChangeSet{constructor(){this.q_=new SortedMap(DocumentKey.comparator)}track(e){let t=e.doc.key,r=this.q_.get(t);r?0!==e.type&&3===r.type?this.q_=this.q_.insert(t,e):3===e.type&&1!==r.type?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.q_=this.q_.remove(t):1===e.type&&2===r.type?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):fail():this.q_=this.q_.insert(t,e)}Q_(){let e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}};let ViewSnapshot=class ViewSnapshot{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new ViewSnapshot(e,t,DocumentSet.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&__PRIVATE_queryEquals(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_QueryListenersInfo=class __PRIVATE_QueryListenersInfo{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}};let __PRIVATE_EventManagerImpl=class __PRIVATE_EventManagerImpl{constructor(){this.queries=new ObjectMap(e=>__PRIVATE_canonifyQuery(e),__PRIVATE_queryEquals),this.onlineState="Unknown",this.z_=new Set}};async function __PRIVATE_eventManagerListen(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.W_()&&t.G_()&&(r=2):(i=new __PRIVATE_QueryListenersInfo,r=t.G_()?0:1);try{switch(r){case 0:i.K_=await e.onListen(n,!0);break;case 1:i.K_=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=__PRIVATE_wrapInUserErrorIfRecoverable(r,`Initialization of query '${__PRIVATE_stringifyQuery(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.U_.push(t),t.j_(e.onlineState),i.K_&&t.H_(i.K_)&&__PRIVATE_raiseSnapshotsInSyncEvent(e)}async function __PRIVATE_eventManagerUnlisten(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.U_.indexOf(t);e>=0&&(i.U_.splice(e,1),0===i.U_.length?n=t.G_()?0:1:!i.W_()&&t.G_()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function __PRIVATE_eventManagerOnWatchChange(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.U_)e.H_(n)&&(r=!0);i.K_=n}}r&&__PRIVATE_raiseSnapshotsInSyncEvent(e)}function __PRIVATE_eventManagerOnWatchError(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.U_)e.onError(r);e.queries.delete(t)}function __PRIVATE_raiseSnapshotsInSyncEvent(e){e.z_.forEach(e=>{e.next()})}(a=s||(s={})).J_="default",a.Cache="cache";let __PRIVATE_QueryListener=class __PRIVATE_QueryListener{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new ViewSnapshot(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){return!(e.fromCache&&this.G_())||(!this.options.ra||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ea(e){if(e.docChanges.length>0)return!0;let t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}na(e){e=ViewSnapshot.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==s.Cache}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AddedLimboDocument=class __PRIVATE_AddedLimboDocument{constructor(e){this.key=e}};let __PRIVATE_RemovedLimboDocument=class __PRIVATE_RemovedLimboDocument{constructor(e){this.key=e}};let __PRIVATE_View=class __PRIVATE_View{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=__PRIVATE_documentKeySet(),this.mutatedKeys=__PRIVATE_documentKeySet(),this.Ia=__PRIVATE_newQueryComparator(e),this.Ta=new DocumentSet(this.Ia)}get Ea(){return this.la}da(e,t){let r=t?t.Aa:new __PRIVATE_DocumentChangeSet,n=t?t.Ta:this.Ta,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),c=__PRIVATE_queryMatches(this.query,t)?t:null,_=!!u&&this.mutatedKeys.has(u.key),h=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),d=!1;u&&c?u.data.isEqual(c.data)?_!==h&&(r.track({type:3,doc:c}),d=!0):this.Ra(u,c)||(r.track({type:2,doc:c}),d=!0,(o&&this.Ia(c,o)>0||l&&0>this.Ia(c,l))&&(a=!0)):!u&&c?(r.track({type:0,doc:c}),d=!0):u&&!c&&(r.track({type:1,doc:u}),d=!0,(o||l)&&(a=!0)),d&&(c?(s=s.add(c),i=h?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{Ta:s,Aa:r,Zi:a,mutatedKeys:i}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;let s=e.Aa.Q_();s.sort((e,t)=>(function(e,t){let order=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fail()}};return order(e)-order(t)})(e.type,t.type)||this.Ia(e.doc,t.doc)),this.Va(r),n=null!=n&&n;let a=t&&!n?this.ma():[],o=0===this.Pa.size&&this.current&&!n?1:0,l=o!==this.ha;return(this.ha=o,0!==s.length||l)?{snapshot:new ViewSnapshot(this.query,e.Ta,i,s,e.mutatedKeys,0===o,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new __PRIVATE_DocumentChangeSet,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(e=>this.la=this.la.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=e.current)}ma(){if(!this.current)return[];let e=this.Pa;this.Pa=__PRIVATE_documentKeySet(),this.Ta.forEach(e=>{this.ga(e.key)&&(this.Pa=this.Pa.add(e.key))});let t=[];return e.forEach(e=>{this.Pa.has(e)||t.push(new __PRIVATE_RemovedLimboDocument(e))}),this.Pa.forEach(r=>{e.has(r)||t.push(new __PRIVATE_AddedLimboDocument(r))}),t}pa(e){this.la=e.ls,this.Pa=__PRIVATE_documentKeySet();let t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return ViewSnapshot.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,0===this.ha,this.hasCachedResults)}};let __PRIVATE_QueryView=class __PRIVATE_QueryView{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}};let LimboResolution=class LimboResolution{constructor(e){this.key=e,this.wa=!1}};let __PRIVATE_SyncEngineImpl=class __PRIVATE_SyncEngineImpl{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new ObjectMap(e=>__PRIVATE_canonifyQuery(e),__PRIVATE_queryEquals),this.Da=new Map,this.Ca=new Set,this.va=new SortedMap(DocumentKey.comparator),this.Fa=new Map,this.Ma=new __PRIVATE_ReferenceSet,this.xa={},this.Oa=new Map,this.Na=__PRIVATE_TargetIdGenerator.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return!0===this.La}};async function __PRIVATE_syncEngineListen(e,t,r=!0){let n;let i=__PRIVATE_ensureWatchCallbacks(e),s=i.ba.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.ya()):n=await __PRIVATE_allocateTargetAndMaybeListen(i,t,r,!0),n}async function __PRIVATE_triggerRemoteStoreListen(e,t){let r=__PRIVATE_ensureWatchCallbacks(e);await __PRIVATE_allocateTargetAndMaybeListen(r,t,!0,!1)}async function __PRIVATE_allocateTargetAndMaybeListen(e,t,r,n){let i;let s=await __PRIVATE_localStoreAllocateTarget(e.localStore,__PRIVATE_queryToTarget(t)),a=s.targetId,o=r?e.sharedClientState.addLocalQueryTarget(a):"not-current";return n&&(i=await __PRIVATE_initializeViewAndComputeSnapshot(e,t,a,"current"===o,s.resumeToken)),e.isPrimaryClient&&r&&__PRIVATE_remoteStoreListen(e.remoteStore,s),i}async function __PRIVATE_initializeViewAndComputeSnapshot(e,t,r,n,i){e.Ba=(t,r,n)=>(async function(e,t,r,n){let i=t.view.da(r);i.Zi&&(i=await __PRIVATE_localStoreExecuteQuery(e.localStore,t.query,!1).then(({documents:e})=>t.view.da(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=n&&null!=n.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return __PRIVATE_updateTrackedLimbos(e,t.targetId,o.fa),o.snapshot})(e,t,r,n);let s=await __PRIVATE_localStoreExecuteQuery(e.localStore,t,!0),a=new __PRIVATE_View(t,s.ls),o=a.da(s.documents),l=TargetChange.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);__PRIVATE_updateTrackedLimbos(e,r,u.fa);let c=new __PRIVATE_QueryView(t,r,a);return e.ba.set(t,c),e.Da.has(r)?e.Da.get(r).push(t):e.Da.set(r,[t]),u.snapshot}async function __PRIVATE_syncEngineUnlisten(e,t,r){let n=e.ba.get(t),i=e.Da.get(n.targetId);if(i.length>1)return e.Da.set(n.targetId,i.filter(e=>!__PRIVATE_queryEquals(e,t))),void e.ba.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await __PRIVATE_localStoreReleaseTarget(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&__PRIVATE_remoteStoreUnlisten(e.remoteStore,n.targetId),__PRIVATE_removeAndCleanupTarget(e,n.targetId)}).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss)):(__PRIVATE_removeAndCleanupTarget(e,n.targetId),await __PRIVATE_localStoreReleaseTarget(e.localStore,n.targetId,!0))}async function __PRIVATE_triggerRemoteStoreUnlisten(e,t){let r=e.ba.get(t),n=e.Da.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),__PRIVATE_remoteStoreUnlisten(e.remoteStore,r.targetId))}async function __PRIVATE_syncEngineWrite(e,t,r){let n=__PRIVATE_syncEngineEnsureWriteCallbacks(e);try{var i;let e;let s=await function(e,t){let r,n;let i=Timestamp.now(),s=t.reduce((e,t)=>e.add(t.key),__PRIVATE_documentKeySet());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=I,l=__PRIVATE_documentKeySet();return e.ss.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(n=>{r=n;let s=[];for(let e of t){let t=__PRIVATE_mutationExtractBaseValue(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new __PRIVATE_PatchMutation(e.key,t,__PRIVATE_extractFieldMask(t.value.mapValue),Precondition.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:__PRIVATE_convertOverlayedDocumentMapToDocumentMap(r)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=n.xa[n.currentUser.toKey()])||(e=new SortedMap(__PRIVATE_primitiveComparator)),e=e.insert(i,r),n.xa[n.currentUser.toKey()]=e,await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n,s.changes),await __PRIVATE_fillWritePipeline(n.remoteStore)}catch(t){let e=__PRIVATE_wrapInUserErrorIfRecoverable(t,"Failed to persist write");r.reject(e)}}async function __PRIVATE_syncEngineApplyRemoteEvent(e,t){try{let r=await __PRIVATE_localStoreApplyRemoteEventToLocalCache(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Fa.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||fail(),t.addedDocuments.size>0?n.wa=!0:t.modifiedDocuments.size>0?n.wa||fail():t.removedDocuments.size>0&&(n.wa||fail(),n.wa=!1))}),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,r,t)}catch(e){await __PRIVATE_ignoreIfPrimaryLeaseLoss(e)}}function __PRIVATE_syncEngineApplyOnlineStateChange(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.ba.forEach((e,r)=>{let n=r.view.j_(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.U_)e.j_(t)&&(r=!0)}),r&&__PRIVATE_raiseSnapshotsInSyncEvent(n),i.length&&e.Sa.l_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function __PRIVATE_syncEngineRejectListen(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Fa.get(t),i=n&&n.key;if(i){let r=new SortedMap(DocumentKey.comparator);r=r.insert(i,MutableDocument.newNoDocument(i,SnapshotVersion.min()));let n=__PRIVATE_documentKeySet().add(i),s=new RemoteEvent(SnapshotVersion.min(),new Map,new SortedMap(__PRIVATE_primitiveComparator),r,n);await __PRIVATE_syncEngineApplyRemoteEvent(e,s),e.va=e.va.remove(i),e.Fa.delete(t),__PRIVATE_pumpEnqueuedLimboResolutions(e)}else await __PRIVATE_localStoreReleaseTarget(e.localStore,t,!1).then(()=>__PRIVATE_removeAndCleanupTarget(e,t,r)).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss)}async function __PRIVATE_syncEngineApplySuccessfulWrite(e,t){let r=t.batch.batchId;try{let n=await __PRIVATE_localStoreAcknowledgeBatch(e.localStore,t);__PRIVATE_processUserCallback(e,r,null),__PRIVATE_triggerPendingWritesCallbacks(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,n)}catch(e){await __PRIVATE_ignoreIfPrimaryLeaseLoss(e)}}async function __PRIVATE_syncEngineRejectFailedWrite(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||fail(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});__PRIVATE_processUserCallback(e,t,r),__PRIVATE_triggerPendingWritesCallbacks(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,i)}catch(e){await __PRIVATE_ignoreIfPrimaryLeaseLoss(e)}}function __PRIVATE_triggerPendingWritesCallbacks(e,t){(e.Oa.get(t)||[]).forEach(e=>{e.resolve()}),e.Oa.delete(t)}function __PRIVATE_processUserCallback(e,t,r){let n=e.xa[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.xa[e.currentUser.toKey()]=n}}function __PRIVATE_removeAndCleanupTarget(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Da.get(t)))e.ba.delete(n),r&&e.Sa.ka(n,r);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Rr(t).forEach(t=>{e.Ma.containsKey(t)||__PRIVATE_removeLimboTarget(e,t)})}function __PRIVATE_removeLimboTarget(e,t){e.Ca.delete(t.path.canonicalString());let r=e.va.get(t);null!==r&&(__PRIVATE_remoteStoreUnlisten(e.remoteStore,r),e.va=e.va.remove(t),e.Fa.delete(r),__PRIVATE_pumpEnqueuedLimboResolutions(e))}function __PRIVATE_updateTrackedLimbos(e,t,r){for(let n of r)n instanceof __PRIVATE_AddedLimboDocument?(e.Ma.addReference(n.key,t),__PRIVATE_trackLimboChange(e,n)):n instanceof __PRIVATE_RemovedLimboDocument?(__PRIVATE_logDebug("SyncEngine","Document no longer in limbo: "+n.key),e.Ma.removeReference(n.key,t),e.Ma.containsKey(n.key)||__PRIVATE_removeLimboTarget(e,n.key)):fail()}function __PRIVATE_trackLimboChange(e,t){let r=t.key,n=r.path.canonicalString();e.va.get(r)||e.Ca.has(n)||(__PRIVATE_logDebug("SyncEngine","New document in limbo: "+r),e.Ca.add(n),__PRIVATE_pumpEnqueuedLimboResolutions(e))}function __PRIVATE_pumpEnqueuedLimboResolutions(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){let t=e.Ca.values().next().value;e.Ca.delete(t);let r=new DocumentKey(ResourcePath.fromString(t)),n=e.Na.next();e.Fa.set(n,new LimboResolution(r)),e.va=e.va.insert(r,n),__PRIVATE_remoteStoreListen(e.remoteStore,new TargetData(__PRIVATE_queryToTarget(new __PRIVATE_QueryImpl(r.path)),n,"TargetPurposeLimboResolution",__PRIVATE_ListenSequence.oe))}}async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,t,r){let n=[],i=[],s=[];e.ba.isEmpty()||(e.ba.forEach((a,o)=>{s.push(e.Ba(o,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=__PRIVATE_LocalViewChanges.Qi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Sa.l_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>PersistencePromise.forEach(t,t=>PersistencePromise.forEach(t.ki,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>PersistencePromise.forEach(t.qi,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!__PRIVATE_isIndexedDbTransactionError(e))throw e;__PRIVATE_logDebug("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.ts.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.ts=e.ts.insert(t,i)}}}(e.localStore,i))}async function __PRIVATE_syncEngineHandleCredentialChange(e,t){if(!e.currentUser.isEqual(t)){__PRIVATE_logDebug("SyncEngine","User change. New user:",t.toKey());let r=await __PRIVATE_localStoreHandleUserChange(e.localStore,t);e.currentUser=t,e.Oa.forEach(e=>{e.forEach(e=>{e.reject(new FirestoreError(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Oa.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,r._s)}}function __PRIVATE_syncEngineGetRemoteKeysForTarget(e,t){let r=e.Fa.get(t);if(r&&r.wa)return __PRIVATE_documentKeySet().add(r.key);{let r=__PRIVATE_documentKeySet(),n=e.Da.get(t);if(!n)return r;for(let t of n){let n=e.ba.get(t);r=r.unionWith(n.view.Ea)}return r}}function __PRIVATE_ensureWatchCallbacks(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=__PRIVATE_syncEngineApplyRemoteEvent.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=__PRIVATE_syncEngineGetRemoteKeysForTarget.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=__PRIVATE_syncEngineRejectListen.bind(null,e),e.Sa.l_=__PRIVATE_eventManagerOnWatchChange.bind(null,e.eventManager),e.Sa.ka=__PRIVATE_eventManagerOnWatchError.bind(null,e.eventManager),e}function __PRIVATE_syncEngineEnsureWriteCallbacks(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=__PRIVATE_syncEngineApplySuccessfulWrite.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=__PRIVATE_syncEngineRejectFailedWrite.bind(null,e),e}let MemoryOfflineComponentProvider=class MemoryOfflineComponentProvider{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=__PRIVATE_newSerializer(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return __PRIVATE_newLocalStore(this.persistence,new __PRIVATE_QueryEngine,e.initialUser,this.serializer)}createPersistence(e){return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.jr,this.serializer)}createSharedClientState(e){return new __PRIVATE_MemorySharedClientState}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};let OnlineComponentProvider=class OnlineComponentProvider{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>__PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=__PRIVATE_syncEngineHandleCredentialChange.bind(null,this.syncEngine),await __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new __PRIVATE_EventManagerImpl}createDatastore(e){let t=__PRIVATE_newSerializer(e.databaseInfo.databaseId),r=new __PRIVATE_WebChannelConnection(e.databaseInfo);return new __PRIVATE_DatastoreImpl(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new __PRIVATE_RemoteStoreImpl(t,this.datastore,e.asyncQueue,e=>__PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine,e,0),__PRIVATE_BrowserConnectivityMonitor.D()?new __PRIVATE_BrowserConnectivityMonitor:new __PRIVATE_NoopConnectivityMonitor)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new __PRIVATE_SyncEngineImpl(e,t,r,n,i,s);return a&&(o.La=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){__PRIVATE_logDebug("RemoteStore","RemoteStore shutting down."),e.M_.add(5),await __PRIVATE_disableNetworkInternal(e),e.O_.shutdown(),e.N_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AsyncObserver=class __PRIVATE_AsyncObserver{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):__PRIVATE_logError("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirestoreClient=class FirestoreClient{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=User.UNAUTHENTICATED,this.clientId=__PRIVATE_AutoId.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{__PRIVATE_logDebug("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(__PRIVATE_logDebug("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new FirestoreError(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new __PRIVATE_Deferred;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=__PRIVATE_wrapInUserErrorIfRecoverable(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}};async function __PRIVATE_setOfflineComponentProvider(e,t){e.asyncQueue.verifyOperationInProgress(),__PRIVATE_logDebug("FirestoreClient","Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await __PRIVATE_localStoreHandleUserChange(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function __PRIVATE_setOnlineComponentProvider(e,t){e.asyncQueue.verifyOperationInProgress();let r=await __PRIVATE_ensureOfflineComponents(e);__PRIVATE_logDebug("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>__PRIVATE_remoteStoreHandleCredentialChange(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>__PRIVATE_remoteStoreHandleCredentialChange(t.remoteStore,r)),e._onlineComponents=t}function __PRIVATE_canFallbackFromIndexedDbError(e){return"FirebaseError"===e.name?e.code===E.FAILED_PRECONDITION||e.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function __PRIVATE_ensureOfflineComponents(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){__PRIVATE_logDebug("FirestoreClient","Using user provided OfflineComponentProvider");try{await __PRIVATE_setOfflineComponentProvider(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!__PRIVATE_canFallbackFromIndexedDbError(t))throw t;__PRIVATE_logWarn("Error using user provided cache. Falling back to memory cache: "+t),await __PRIVATE_setOfflineComponentProvider(e,new MemoryOfflineComponentProvider)}}else __PRIVATE_logDebug("FirestoreClient","Using default OfflineComponentProvider"),await __PRIVATE_setOfflineComponentProvider(e,new MemoryOfflineComponentProvider)}return e._offlineComponents}async function __PRIVATE_ensureOnlineComponents(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(__PRIVATE_logDebug("FirestoreClient","Using user provided OnlineComponentProvider"),await __PRIVATE_setOnlineComponentProvider(e,e._uninitializedComponentsProvider._online)):(__PRIVATE_logDebug("FirestoreClient","Using default OnlineComponentProvider"),await __PRIVATE_setOnlineComponentProvider(e,new OnlineComponentProvider))),e._onlineComponents}function __PRIVATE_getSyncEngine(e){return __PRIVATE_ensureOnlineComponents(e).then(e=>e.syncEngine)}async function __PRIVATE_getEventManager(e){let t=await __PRIVATE_ensureOnlineComponents(e),r=t.eventManager;return r.onListen=__PRIVATE_syncEngineListen.bind(null,t.syncEngine),r.onUnlisten=__PRIVATE_syncEngineUnlisten.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=__PRIVATE_triggerRemoteStoreListen.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=__PRIVATE_triggerRemoteStoreUnlisten.bind(null,t.syncEngine),r}function __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(e,t,r={}){let n=new __PRIVATE_Deferred;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new __PRIVATE_AsyncObserver({next:s=>{t.enqueueAndForget(()=>__PRIVATE_eventManagerUnlisten(e,a));let o=s.docs.has(r);!o&&s.fromCache?i.reject(new FirestoreError(E.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&n&&"server"===n.source?i.reject(new FirestoreError(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new __PRIVATE_QueryListener(new __PRIVATE_QueryImpl(r.path),s,{includeMetadataChanges:!0,ra:!0});return __PRIVATE_eventManagerListen(e,a)})(await __PRIVATE_getEventManager(e),e.asyncQueue,t,r,n)),n.promise}function __PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(e,t,r={}){let n=new __PRIVATE_Deferred;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new __PRIVATE_AsyncObserver({next:r=>{t.enqueueAndForget(()=>__PRIVATE_eventManagerUnlisten(e,a)),r.fromCache&&"server"===n.source?i.reject(new FirestoreError(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new __PRIVATE_QueryListener(r,s,{includeMetadataChanges:!0,ra:!0});return __PRIVATE_eventManagerListen(e,a)})(await __PRIVATE_getEventManager(e),e.asyncQueue,t,r,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_cloneLongPollingOptions(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_validateNonEmptyArgument(e,t,r){if(!r)throw new FirestoreError(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function __PRIVATE_validateIsNotUsedTogether(e,t,r,n){if(!0===t&&!0===n)throw new FirestoreError(E.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}function __PRIVATE_validateDocumentPath(e){if(!DocumentKey.isDocumentKey(e))throw new FirestoreError(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function __PRIVATE_validateCollectionPath(e){if(DocumentKey.isDocumentKey(e))throw new FirestoreError(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function __PRIVATE_valueDescription(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":fail()}function __PRIVATE_cast(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new FirestoreError(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=__PRIVATE_valueDescription(e);throw new FirestoreError(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirestoreSettingsImpl=class FirestoreSettingsImpl{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new FirestoreError(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new FirestoreError(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}__PRIVATE_validateIsNotUsedTogether("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=__PRIVATE_cloneLongPollingOptions(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new FirestoreError(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new FirestoreError(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new FirestoreError(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}};let Firestore$1=class Firestore$1{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new FirestoreSettingsImpl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new FirestoreError(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new FirestoreError(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new FirestoreSettingsImpl(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new __PRIVATE_EmptyAuthCredentialsProvider;switch(e.type){case"firstParty":return new __PRIVATE_FirstPartyAuthCredentialsProvider(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new FirestoreError(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=F.get(e);t&&(__PRIVATE_logDebug("ComponentProvider","Removing Datastore"),F.delete(e),t.terminate())}(this),Promise.resolve()}};function connectFirestoreEmulator(e,t,r,n={}){var i;let s=(e=__PRIVATE_cast(e,Firestore$1))._getSettings(),a=`${t}:${r}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&__PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=User.MOCK_USER;else{t=(0,c.Sg)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new FirestoreError(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new User(s)}e._authCredentials=new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Query=class Query{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Query(this.firestore,e,this._query)}};let DocumentReference=class DocumentReference{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new CollectionReference(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new DocumentReference(this.firestore,e,this._key)}};let CollectionReference=class CollectionReference extends Query{constructor(e,t,r){super(e,t,new __PRIVATE_QueryImpl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new DocumentReference(this.firestore,null,new DocumentKey(e))}withConverter(e){return new CollectionReference(this.firestore,e,this._path)}};function collection(e,t,...r){if(e=(0,c.m9)(e),__PRIVATE_validateNonEmptyArgument("collection","path",t),e instanceof Firestore$1){let n=ResourcePath.fromString(t,...r);return __PRIVATE_validateCollectionPath(n),new CollectionReference(e,null,n)}{if(!(e instanceof DocumentReference||e instanceof CollectionReference))throw new FirestoreError(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(ResourcePath.fromString(t,...r));return __PRIVATE_validateCollectionPath(n),new CollectionReference(e.firestore,null,n)}}function doc(e,t,...r){if(e=(0,c.m9)(e),1==arguments.length&&(t=__PRIVATE_AutoId.newId()),__PRIVATE_validateNonEmptyArgument("doc","path",t),e instanceof Firestore$1){let n=ResourcePath.fromString(t,...r);return __PRIVATE_validateDocumentPath(n),new DocumentReference(e,null,new DocumentKey(n))}{if(!(e instanceof DocumentReference||e instanceof CollectionReference))throw new FirestoreError(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(ResourcePath.fromString(t,...r));return __PRIVATE_validateDocumentPath(n),new DocumentReference(e.firestore,e instanceof CollectionReference?e.converter:null,new DocumentKey(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AsyncQueueImpl=class __PRIVATE_AsyncQueueImpl{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new __PRIVATE_ExponentialBackoff(this,"async_queue_retry"),this.hu=()=>{let e=getDocument();e&&__PRIVATE_logDebug("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Jo.Uo()};let e=getDocument();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;let t=getDocument();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});let t=new __PRIVATE_Deferred;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!__PRIVATE_isIndexedDbTransactionError(e))throw e;__PRIVATE_logDebug("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){let t=this.iu.then(()=>(this.uu=!0,e().catch(e=>{let t;this.au=e,this.uu=!1;let r=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.uu=!1,e))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);let n=DelayedOperation.createAndSchedule(this,e,t,r,e=>this.Eu(e));return this._u.push(n),n}Pu(){this.au&&fail()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(let t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{for(let t of(this._u.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this._u))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){let t=this._u.indexOf(e);this._u.splice(t,1)}};let Firestore=class Firestore extends Firestore$1{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new __PRIVATE_AsyncQueueImpl,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||__PRIVATE_configureFirestore(this),this._firestoreClient.terminate()}};function getFirestore(e,t){let r="object"==typeof e?e:(0,o.Mq)(),n=(0,o.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let e=(0,c.P0)("firestore");e&&connectFirestoreEmulator(n,...e)}return n}function ensureFirestoreConfigured(e){return e._firestoreClient||__PRIVATE_configureFirestore(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function __PRIVATE_configureFirestore(e){var t,r,n,i;let s=e._freezeSettings(),a=(i=e._databaseId,new DatabaseInfo(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,__PRIVATE_cloneLongPollingOptions(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new FirestoreClient(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(r=s.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bytes=class Bytes{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bytes(ByteString.fromBase64String(e))}catch(e){throw new FirestoreError(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Bytes(ByteString.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldPath=class FieldPath{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new FirestoreError(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new FieldPath$1(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldValue=class FieldValue{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GeoPoint=class GeoPoint{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new FirestoreError(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new FirestoreError(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return __PRIVATE_primitiveComparator(this._lat,e._lat)||__PRIVATE_primitiveComparator(this._long,e._long)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N=/^__.*__$/;let ParsedSetData=class ParsedSetData{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new __PRIVATE_PatchMutation(e,this.data,this.fieldMask,t,this.fieldTransforms):new __PRIVATE_SetMutation(e,this.data,t,this.fieldTransforms)}};let ParsedUpdateData=class ParsedUpdateData{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new __PRIVATE_PatchMutation(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function __PRIVATE_isWrite(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fail()}}let __PRIVATE_ParseContextImpl=class __PRIVATE_ParseContextImpl{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new __PRIVATE_ParseContextImpl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.gu({path:r,yu:!1});return n.wu(e),n}Su(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.gu({path:r,yu:!1});return n.mu(),n}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return __PRIVATE_createError(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(0===e.length)throw this.Du("Document fields must not be empty");if(__PRIVATE_isWrite(this.fu)&&N.test(e))throw this.Du('Document fields cannot begin and end with "__"')}};let __PRIVATE_UserDataReader=class __PRIVATE_UserDataReader{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||__PRIVATE_newSerializer(e)}Fu(e,t,r,n=!1){return new __PRIVATE_ParseContextImpl({fu:e,methodName:t,vu:r,path:FieldPath$1.emptyPath(),yu:!1,Cu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function __PRIVATE_newUserDataReader(e){let t=e._freezeSettings(),r=__PRIVATE_newSerializer(e._databaseId);return new __PRIVATE_UserDataReader(e._databaseId,!!t.ignoreUndefinedProperties,r)}function __PRIVATE_parseSetData(e,t,r,n,i,s={}){let a,o;let l=e.Fu(s.merge||s.mergeFields?2:0,t,r,i);__PRIVATE_validatePlainObject("Data must be an object, but it was:",l,n);let u=__PRIVATE_parseObject(n,l);if(s.merge)a=new FieldMask(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=__PRIVATE_fieldPathFromArgument$1(t,n,r);if(!l.contains(i))throw new FirestoreError(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);__PRIVATE_fieldMaskContains(e,i)||e.push(i)}a=new FieldMask(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new ParsedSetData(new ObjectValue(u),a,o)}let __PRIVATE_DeleteFieldValueImpl=class __PRIVATE_DeleteFieldValueImpl extends FieldValue{_toFieldTransform(e){if(2!==e.fu)throw 1===e.fu?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof __PRIVATE_DeleteFieldValueImpl}};function __PRIVATE_parseUpdateData(e,t,r,n){let i=e.Fu(1,t,r);__PRIVATE_validatePlainObject("Data must be an object, but it was:",i,n);let s=[],a=ObjectValue.empty();forEach(n,(e,n)=>{let o=__PRIVATE_fieldPathFromDotSeparatedString(t,e,r);n=(0,c.m9)(n);let l=i.Su(o);if(n instanceof __PRIVATE_DeleteFieldValueImpl)s.push(o);else{let e=__PRIVATE_parseData(n,l);null!=e&&(s.push(o),a.set(o,e))}});let o=new FieldMask(s);return new ParsedUpdateData(a,o,i.fieldTransforms)}function __PRIVATE_parseUpdateVarargs(e,t,r,n,i,s){let a=e.Fu(1,t,r),o=[__PRIVATE_fieldPathFromArgument$1(t,n,r)],l=[i];if(s.length%2!=0)throw new FirestoreError(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(__PRIVATE_fieldPathFromArgument$1(t,s[e])),l.push(s[e+1]);let u=[],_=ObjectValue.empty();for(let e=o.length-1;e>=0;--e)if(!__PRIVATE_fieldMaskContains(u,o[e])){let t=o[e],r=l[e];r=(0,c.m9)(r);let n=a.Su(t);if(r instanceof __PRIVATE_DeleteFieldValueImpl)u.push(t);else{let e=__PRIVATE_parseData(r,n);null!=e&&(u.push(t),_.set(t,e))}}let h=new FieldMask(u);return new ParsedUpdateData(_,h,a.fieldTransforms)}function __PRIVATE_parseQueryValue(e,t,r,n=!1){return __PRIVATE_parseData(r,e.Fu(n?4:3,t))}function __PRIVATE_parseData(e,t){if(__PRIVATE_looksLikeJsonObject(e=(0,c.m9)(e)))return __PRIVATE_validatePlainObject("Unsupported field value:",t,e),__PRIVATE_parseObject(e,t);if(e instanceof FieldValue)return function(e,t){if(!__PRIVATE_isWrite(t.fu))throw t.Du(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Du(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&4!==t.fu)throw t.Du("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=__PRIVATE_parseData(i,t.bu(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return toNumber(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=Timestamp.fromDate(e);return{timestampValue:toTimestamp(t.serializer,r)}}if(e instanceof Timestamp){let r=new Timestamp(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:toTimestamp(t.serializer,r)}}if(e instanceof GeoPoint)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Bytes)return{bytesValue:__PRIVATE_toBytes(t.serializer,e._byteString)};if(e instanceof DocumentReference){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.Du(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:__PRIVATE_toResourceName(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Du(`Unsupported field value: ${__PRIVATE_valueDescription(e)}`)}(e,t)}function __PRIVATE_parseObject(e,t){let r={};return isEmpty(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):forEach(e,(e,n)=>{let i=__PRIVATE_parseData(n,t.pu(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function __PRIVATE_looksLikeJsonObject(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Timestamp||e instanceof GeoPoint||e instanceof Bytes||e instanceof DocumentReference||e instanceof FieldValue)}function __PRIVATE_validatePlainObject(e,t,r){if(!__PRIVATE_looksLikeJsonObject(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=__PRIVATE_valueDescription(r);throw"an object"===n?t.Du(e+" a custom object"):t.Du(e+" "+n)}}function __PRIVATE_fieldPathFromArgument$1(e,t,r){if((t=(0,c.m9)(t))instanceof FieldPath)return t._internalPath;if("string"==typeof t)return __PRIVATE_fieldPathFromDotSeparatedString(e,t);throw __PRIVATE_createError("Field path arguments must be of type string or ",e,!1,void 0,r)}let k=RegExp("[~\\*/\\[\\]]");function __PRIVATE_fieldPathFromDotSeparatedString(e,t,r){if(t.search(k)>=0)throw __PRIVATE_createError(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new FieldPath(...t.split("."))._internalPath}catch(n){throw __PRIVATE_createError(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function __PRIVATE_createError(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new FirestoreError(E.INVALID_ARGUMENT,o+e+l)}function __PRIVATE_fieldMaskContains(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DocumentSnapshot$1=class DocumentSnapshot$1{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new DocumentReference(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new QueryDocumentSnapshot$1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}};let QueryDocumentSnapshot$1=class QueryDocumentSnapshot$1 extends DocumentSnapshot$1{data(){return super.data()}};function __PRIVATE_fieldPathFromArgument(e,t){return"string"==typeof t?__PRIVATE_fieldPathFromDotSeparatedString(e,t):t instanceof FieldPath?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_validateHasExplicitOrderByForLimitToLast(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new FirestoreError(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}let AppliableConstraint=class AppliableConstraint{};let QueryConstraint=class QueryConstraint extends AppliableConstraint{};function query(e,t,...r){let n=[];for(let i of(t instanceof AppliableConstraint&&n.push(t),function(e){let t=e.filter(e=>e instanceof QueryCompositeFilterConstraint).length,r=e.filter(e=>e instanceof QueryFieldFilterConstraint).length;if(t>1||t>0&&r>0)throw new FirestoreError(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}let QueryFieldFilterConstraint=class QueryFieldFilterConstraint extends QueryConstraint{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new QueryFieldFilterConstraint(e,t,r)}_apply(e){let t=this._parse(e);return __PRIVATE_validateNewFieldFilter(e._query,t),new Query(e.firestore,e.converter,__PRIVATE_queryWithAddedFilter(e._query,t))}_parse(e){let t=__PRIVATE_newUserDataReader(e.firestore),r=function(e,t,r,n,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new FirestoreError(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){__PRIVATE_validateDisjunctiveFilterElements(a,s);let t=[];for(let r of a)t.push(__PRIVATE_parseDocumentIdValue(n,e,r));o={arrayValue:{values:t}}}else o=__PRIVATE_parseDocumentIdValue(n,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||__PRIVATE_validateDisjunctiveFilterElements(a,s),o=__PRIVATE_parseQueryValue(r,t,a,"in"===s||"not-in"===s);return FieldFilter.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return r}};function where(e,t,r){let n=__PRIVATE_fieldPathFromArgument("where",e);return QueryFieldFilterConstraint._create(n,t,r)}let QueryCompositeFilterConstraint=class QueryCompositeFilterConstraint extends AppliableConstraint{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new QueryCompositeFilterConstraint(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:CompositeFilter.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e,n=t.getFlattenedFilters();for(let e of n)__PRIVATE_validateNewFieldFilter(r,e),r=__PRIVATE_queryWithAddedFilter(r,e)}(e._query,t),new Query(e.firestore,e.converter,__PRIVATE_queryWithAddedFilter(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}};function __PRIVATE_parseDocumentIdValue(e,t,r){if("string"==typeof(r=(0,c.m9)(r))){if(""===r)throw new FirestoreError(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!__PRIVATE_isCollectionGroupQuery(t)&&-1!==r.indexOf("/"))throw new FirestoreError(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(ResourcePath.fromString(r));if(!DocumentKey.isDocumentKey(n))throw new FirestoreError(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return __PRIVATE_refValue(e,new DocumentKey(n))}if(r instanceof DocumentReference)return __PRIVATE_refValue(e,r._key);throw new FirestoreError(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${__PRIVATE_valueDescription(r)}.`)}function __PRIVATE_validateDisjunctiveFilterElements(e,t){if(!Array.isArray(e)||0===e.length)throw new FirestoreError(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function __PRIVATE_validateNewFieldFilter(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new FirestoreError(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new FirestoreError(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}let AbstractUserDataWriter=class AbstractUserDataWriter{convertValue(e,t="none"){switch(__PRIVATE_typeOrder(e)){case 0:return null;case 1:return e.booleanValue;case 2:return __PRIVATE_normalizeNumber(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(__PRIVATE_normalizeByteString(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw fail()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return forEach(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new GeoPoint(__PRIVATE_normalizeNumber(e.latitude),__PRIVATE_normalizeNumber(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=__PRIVATE_getPreviousValue(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(__PRIVATE_getLocalWriteTime(e));default:return null}}convertTimestamp(e){let t=__PRIVATE_normalizeTimestamp(e);return new Timestamp(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=ResourcePath.fromString(e);__PRIVATE_isValidResourceName(r)||fail();let n=new DatabaseId(r.get(1),r.get(3)),i=new DocumentKey(r.popFirst(5));return n.isEqual(t)||__PRIVATE_logError(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_applyFirestoreDataConverter(e,t,r){return e?r&&(r.merge||r.mergeFields)?e.toFirestore(t,r):e.toFirestore(t):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SnapshotMetadata=class SnapshotMetadata{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}};let DocumentSnapshot=class DocumentSnapshot extends DocumentSnapshot$1{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new QueryDocumentSnapshot(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}};let QueryDocumentSnapshot=class QueryDocumentSnapshot extends DocumentSnapshot{data(e={}){return super.data(e)}};let QuerySnapshot=class QuerySnapshot{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new SnapshotMetadata(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new QueryDocumentSnapshot(this._firestore,this._userDataWriter,r.key,r,new SnapshotMetadata(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new FirestoreError(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new QueryDocumentSnapshot(e._firestore,e._userDataWriter,r.doc.key,r.doc,new SnapshotMetadata(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new QueryDocumentSnapshot(e._firestore,e._userDataWriter,t.doc.key,t.doc,new SnapshotMetadata(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:__PRIVATE_resultChangeType(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function __PRIVATE_resultChangeType(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fail()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getDoc(e){e=__PRIVATE_cast(e,DocumentReference);let t=__PRIVATE_cast(e.firestore,Firestore);return __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(ensureFirestoreConfigured(t),e._key).then(r=>__PRIVATE_convertToDocSnapshot(t,e,r))}let __PRIVATE_ExpUserDataWriter=class __PRIVATE_ExpUserDataWriter extends AbstractUserDataWriter{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bytes(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new DocumentReference(this.firestore,null,t)}};function getDocs(e){e=__PRIVATE_cast(e,Query);let t=__PRIVATE_cast(e.firestore,Firestore),r=ensureFirestoreConfigured(t),n=new __PRIVATE_ExpUserDataWriter(t);return __PRIVATE_validateHasExplicitOrderByForLimitToLast(e._query),__PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(r,e._query).then(r=>new QuerySnapshot(t,n,e,r))}function setDoc(e,t,r){e=__PRIVATE_cast(e,DocumentReference);let n=__PRIVATE_cast(e.firestore,Firestore),i=__PRIVATE_applyFirestoreDataConverter(e.converter,t,r);return executeWrite(n,[__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(n),"setDoc",e._key,i,null!==e.converter,r).toMutation(e._key,Precondition.none())])}function updateDoc(e,t,r,...n){e=__PRIVATE_cast(e,DocumentReference);let i=__PRIVATE_cast(e.firestore,Firestore),s=__PRIVATE_newUserDataReader(i);return executeWrite(i,[("string"==typeof(t=(0,c.m9)(t))||t instanceof FieldPath?__PRIVATE_parseUpdateVarargs(s,"updateDoc",e._key,t,r,n):__PRIVATE_parseUpdateData(s,"updateDoc",e._key,t)).toMutation(e._key,Precondition.exists(!0))])}function deleteDoc(e){return executeWrite(__PRIVATE_cast(e.firestore,Firestore),[new __PRIVATE_DeleteMutation(e._key,Precondition.none())])}function executeWrite(e,t){return function(e,t){let r=new __PRIVATE_Deferred;return e.asyncQueue.enqueueAndForget(async()=>__PRIVATE_syncEngineWrite(await __PRIVATE_getSyncEngine(e),t,r)),r.promise}(ensureFirestoreConfigured(e),t)}function __PRIVATE_convertToDocSnapshot(e,t,r){let n=r.docs.get(t._key),i=new __PRIVATE_ExpUserDataWriter(e);return new DocumentSnapshot(e,i,t._key,n,new SnapshotMetadata(r.hasPendingWrites,r.fromCache),t.converter)}new WeakMap,function(e=!0){m=o.Jn,(0,o.Xd)(new l.wA("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(t.getProvider("auth-internal")),new __PRIVATE_FirebaseAppCheckTokenProvider(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new FirestoreError(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new DatabaseId(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(d,"4.6.1",void 0),(0,o.KN)(d,"4.6.1","esm2017")}()}}]);