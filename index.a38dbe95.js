const l=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};l();const a=document.querySelector(".root"),d=152,p="https://pokeapi.co/api/v2/pokemon/",c=[];for(let o=1;o<=d;o++){const n=p+o,s=fetch(n).then(r=>r.json()).then(r=>r);c.push(s)}Promise.all(c).then(o=>{o.forEach(({name:n,sprites:s,types:r})=>{console.log(r);const e={name:n,image:s.front_default,type:r[0].type.name};f(e)})});const f=o=>{const n=`
      <div class="pokemon-card-container ${o.type}">
        <div class="pokemon-card">
          <div class="pokemon-image">
            <img src="${o.image}" alt="${o.name}" />
            <span class="pokemon-type ${o.type}">${o.type.toUpperCase()}</span>
          </div>
          <div class="pokemon-info">
            <p>${o.name}</p>
          </div>
      </div>
      </div>
    `;a.innerHTML+=n};
