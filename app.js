(() => {
  const $ = (id) => document.getElementById(id);
  const text = {
    en:{brand:'CALENDAR',brandSub:'YOUR MONTH, YOUR PLANS',hideCalendar:'Hide calendar',showCalendar:'Show calendar',hideDock:'Hide top bar',showDock:'Show top bar',today:'Today',settings:'Settings',monthNote:'SMALL STEPS. A WELL-PLANNED MONTH.',footer:'YOUR PLAN, EVERY DAY',personalization:'PERSONALIZATION',language:'Language',layout:'Calendar layout',layoutHint:'This adjusts the calendar layout width. Your monitor controls the actual screen ratio.',calendarStyles:'Calendar styles',calendarTab:'Calendar',backgroundsTab:'Backgrounds',eventsTab:'Events',visibleProfile:'Calendar visible',hiddenProfile:'Calendar hidden',profileVisible:'Calendar',profileHidden:'No calendar',styleGrid:'Grid',styleMinimal:'Minimal',styleCards:'Cards',styleThreeDay:'3-day cards',styleWeek:'Week view',styleAgenda:'Agenda',styleCompact:'Compact',styleBento:'Bento',styleEditorial:'Editorial',yes:'Yes',no:'No',autoChangeBackgrounds:'Automatic background change',changeEvery:'Change background every',secondsShort:'s',loopVideos:'Loop videos',urlImportHint:'To add a direct image/video link, paste it into Background URL in Wallpaper Engine Properties. Use a direct media-file link.',todayLabel:'TODAY',yesterdayLabel:'YESTERDAY',tomorrowLabel:'TOMORROW',focusDayLabel:'SELECTED DAY',previousDayLabel:'PREVIOUS DAY',nextDayLabel:'NEXT DAY',noDayEvents:'Nothing planned',backgrounds:'Backgrounds',addBackgrounds:'＋ Add image/video',removeBackground:'Remove current',defaultBackground:'Default background',backgroundHint:'Images and WebM/Ogg videos are saved on this computer. Use the ‹ and › buttons beside the title to switch backgrounds.',libraryEmpty:'No uploaded backgrounds yet.',selectBackground:'Select background',deleteBackground:'Delete',imageFit:'Image display',fitStretch:'Stretch',fitTile:'Tile',fitContain:'Fit',fitCenter:'Center',planning:'PLANNING',events:'Events',add:'＋ Add',importHint:'Import an .ics calendar or a JSON plan exported from your calendar or planner.',exportPlan:'↓ Export plan',importJson:'↑ Import JSON',importIcs:'▣ Import .ics calendar',icsHint:'Import an .ics file exported from Outlook, Google, or another calendar. Event start times appear next to their names.',emptyEvents:'No events yet. Import an .ics calendar or a JSON plan.',oneEvent:'SAVED EVENT',fewEvents:'SAVED EVENTS',manyEvents:'SAVED EVENTS',useProperties:'Import a calendar or plan containing this date: ',deleteEventToast:'Event deleted',imageAdded:'Backgrounds added',imageRemoved:'Background removed',defaultRestored:'Default background restored',mediaError:'Could not save this background. Check available disk space.',mediaFormat:'Choose a supported image, WebM/Ogg video, or a direct link ending in a supported file extension.',videoAutoplay:'This video could not be played. Try a WebM or Ogg video.',exported:'Plan exported',planLoaded:'Plan loaded',badPlan:'This file does not contain a valid plan.',icsLoaded:'calendar events imported',badIcs:'No events found in the .ics file.',readError:'Could not read the selected file.',previousMonth:'Previous month',nextMonth:'Next month',close:'Close',previousBackground:'Previous background',nextBackground:'Next background'},
    pl:{brand:'KALENDARZ',brandSub:'TWÓJ MIESIĄC, TWOJE PLANY',hideCalendar:'Ukryj kalendarz',showCalendar:'Pokaż kalendarz',hideDock:'Ukryj górny pasek',showDock:'Pokaż górny pasek',today:'Dzisiaj',settings:'Ustawienia',monthNote:'MAŁE KROKI. DOBRZE ZAPLANOWANY MIESIĄC.',footer:'TWÓJ PLAN NA KAŻDY DZIEŃ',personalization:'PERSONALIZACJA',language:'Język',layout:'Układ kalendarza',layoutHint:'To zmienia szerokość układu. Proporcje ekranu wynikają z ustawień monitora.',calendarStyles:'Style kalendarza',calendarTab:'Kalendarz',backgroundsTab:'Tła',eventsTab:'Wydarzenia',visibleProfile:'Kalendarz widoczny',hiddenProfile:'Kalendarz ukryty',profileVisible:'Kalendarz',profileHidden:'Bez kalendarza',styleGrid:'Siatka',styleMinimal:'Minimalistyczny',styleCards:'Kafelki',styleThreeDay:'3 dni',styleWeek:'Tydzień',styleAgenda:'Agenda',styleCompact:'Kompaktowy',styleBento:'Bento',styleEditorial:'Redakcyjny',yes:'Tak',no:'Nie',autoChangeBackgrounds:'Automatyczna zmiana tapet',changeEvery:'Zmieniaj tło co',secondsShort:'s',loopVideos:'Zapętlaj filmy',urlImportHint:'Aby dodać link do obrazu lub filmu, wklej go w polu Background URL we Właściwościach Wallpaper Engine. Użyj bezpośredniego linku do pliku.',todayLabel:'DZISIAJ',yesterdayLabel:'WCZORAJ',tomorrowLabel:'JUTRO',focusDayLabel:'WYBRANY DZIEŃ',previousDayLabel:'POPRZEDNI DZIEŃ',nextDayLabel:'NASTĘPNY DZIEŃ',noDayEvents:'Brak planów',backgrounds:'Tła',addBackgrounds:'＋ Dodaj obraz/wideo',removeBackground:'Usuń obecne',defaultBackground:'Domyślne tło',backgroundHint:'Obrazy i filmy WebM/Ogg są zapisywane na tym komputerze. Użyj przycisków ‹ i › obok logo, by zmieniać tła.',libraryEmpty:'Brak wgranych teł.',selectBackground:'Wybierz tło',deleteBackground:'Usuń',imageFit:'Sposób wyświetlania obrazu',fitStretch:'Rozciągnij',fitTile:'Mozaika',fitContain:'Dopasuj',fitCenter:'Środek',planning:'PLANOWANIE',events:'Wydarzenia',add:'＋ Dodaj',importHint:'Importuj kalendarz .ics albo plan JSON wyeksportowany z kalendarza lub planera.',exportPlan:'↓ Eksportuj plan',importJson:'↑ Importuj JSON',importIcs:'▣ Importuj kalendarz .ics',icsHint:'Importuj plik .ics z Outlooka, Google lub innego kalendarza. Godzina rozpoczęcia pojawi się obok nazwy wydarzenia.',emptyEvents:'Brak wydarzeń. Zaimportuj kalendarz .ics albo plan JSON.',oneEvent:'ZAPISANE WYDARZENIE',fewEvents:'ZAPISANE WYDARZENIA',manyEvents:'ZAPISANYCH WYDARZEŃ',useProperties:'Zaimportuj kalendarz lub plan zawierający tę datę: ',deleteEventToast:'Wydarzenie usunięte',imageAdded:'Dodano tła',imageRemoved:'Usunięto tło',defaultRestored:'Przywrócono domyślne tło',mediaError:'Nie udało się zapisać tła. Sprawdź wolne miejsce na dysku.',mediaFormat:'Wybierz obsługiwany obraz, film WebM/Ogg lub bezpośredni link z obsługiwanym rozszerzeniem pliku.',videoAutoplay:'Nie udało się odtworzyć filmu. Spróbuj pliku WebM lub Ogg.',exported:'Wyeksportowano plan',planLoaded:'Wczytano plan',badPlan:'Ten plik nie zawiera prawidłowego planu.',icsLoaded:'wydarzeń z kalendarza',badIcs:'Nie znaleziono wydarzeń w pliku .ics.',readError:'Nie udało się odczytać wybranego pliku.',previousMonth:'Poprzedni miesiąc',nextMonth:'Następny miesiąc',close:'Zamknij',previousBackground:'Poprzednie tło',nextBackground:'Następne tło'}
  };
  const weekdays = {en:['MON','TUE','WED','THU','FRI','SAT','SUN'],pl:['PON','WT','ŚR','CZW','PT','SOB','NIEDZ']};
  const monthNames = {en:['January','February','March','April','May','June','July','August','September','October','November','December'],pl:['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień']};
  const shortMonths = {en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],pl:['sty','lut','mar','kwi','maj','cze','lip','sie','wrz','paź','lis','gru']};
  let language = (()=>{try{return localStorage.getItem('calendarLanguage')==='pl'?'pl':'en';}catch{return 'en';}})();
  let shownMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  let focusDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  let expandedDate = null;
  let eventTickerTimers=[];
  let timelineClockTimer=null;
  const openEventGroups=new Set();
  try{JSON.parse(localStorage.getItem('calendarOpenEventGroups')||'[]').forEach(id=>openEventGroups.add(id));}catch{}
  let calendarStyle = (()=>{try{return localStorage.getItem('calendarStyle')||'grid';}catch{return 'grid';}})();
  let timelineOrientation=(()=>{try{return localStorage.getItem('dayTimelineOrientation')==='horizontal'?'horizontal':'vertical';}catch{return 'vertical';}})();
  let brandTitleOverride=null, brandSubtitleOverride=null;
  let wallpaperGradient='solid';
  let events = load('calendarEvents', []);
  let toastTimer;
  let mediaItems=[]; let currentMediaIndex=-1; let mediaDb=null; let mediaPreviewUrls=[];
  let activeImageLayer=0,activeVideoLayer=0,mediaTransitionToken=0,mediaTransitionTimer=null;
  let imageFitMode='stretch';
  const imageLayerUrls=[null,null],videoLayerUrls=[null,null],mediaFadeMs=850;
  let autoChangeBackgrounds=false, rotationSeconds=30, loopVideos=true, rotationTimer=null, lastImportedBackgroundUrl='', pendingBackgroundUrl='', mediaReady=false, mediaReadyResolver=null;
  const mediaReadyPromise=new Promise(resolve=>{mediaReadyResolver=resolve;});
  try{autoChangeBackgrounds=localStorage.getItem('backgroundAutoChange')==='yes';rotationSeconds=Math.max(5,Math.min(600,Number(localStorage.getItem('backgroundRotationSeconds'))||30));loopVideos=localStorage.getItem('backgroundLoopVideos')!=='no';}catch{}

  function load(key, fallback) { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch { return fallback; } }
  function markMediaReady(){mediaReady=true;if(mediaReadyResolver){mediaReadyResolver();mediaReadyResolver=null;}}
  function saveEvents() { localStorage.setItem('calendarEvents', JSON.stringify(events)); }
  const extraText={en:{icsPackage:'Imported calendar',icsPackageCount:'events',icsHide:'Hide from calendar',icsShow:'Show on calendar',icsHidden:'Hidden',icsDelete:'Delete package',allDay:'All day',timelineOrientation:'Day timeline orientation',verticalOrientation:'Top to bottom',horizontalOrientation:'Left to right'},pl:{icsPackage:'Zaimportowany kalendarz',icsPackageCount:'wydarzeń',icsHide:'Ukryj na kalendarzu',icsShow:'Pokaż na kalendarzu',icsHidden:'Ukryty',icsDelete:'Usuń pakiet',allDay:'Cały dzień',timelineOrientation:'Orientacja osi dnia',verticalOrientation:'Z góry na dół',horizontalOrientation:'Z lewej do prawej'}};
  function tr(key){return extraText[language]?.[key]||text[language][key]||text.en[key]||key;}
  function applyWallpaperGradient(){const style=getComputedStyle(document.documentElement),start=style.getPropertyValue('--wallpaper-start').trim()||'rgba(0,0,0,1)',end=style.getPropertyValue('--wallpaper-end').trim()||'rgba(0,0,0,1)',gradients={solid:start,horizontal:`linear-gradient(90deg,${start},${end})`,vertical:`linear-gradient(180deg,${start},${end})`,diagonal:`linear-gradient(135deg,${start},${end})`,radial:`radial-gradient(ellipse at 78% 22%,${end} 0%,${start} 78%)`};$('wallpaper').style.background=gradients[wallpaperGradient]||gradients.solid;}
  function applyLanguage(next){language=next==='pl'?'pl':'en';document.documentElement.lang=language;document.title=`${tr('brand')} — Wallpaper Engine`;document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(key!=='hideCalendar'&&key!=='showCalendar')el.textContent=tr(key);});$('brandTitle').textContent=brandTitleOverride||tr('brand');$('brandSubtitle').textContent=brandSubtitleOverride||tr('brandSub');$('prevMonth').setAttribute('aria-label',tr('previousMonth'));$('nextMonth').setAttribute('aria-label',tr('nextMonth'));$('closeSettings').setAttribute('aria-label',tr('close'));$('previousBackground').setAttribute('aria-label',tr('previousBackground'));$('nextBackground').setAttribute('aria-label',tr('nextBackground'));$('calendarToggle').textContent=tr(document.body.classList.contains('calendar-hidden')?'showCalendar':'hideCalendar');$('dockHide').setAttribute('aria-label',tr('hideDock'));$('dockHide').title=tr('hideDock');$('dockReveal').setAttribute('aria-label',tr('showDock'));$('dockReveal').title=tr('showDock');$('rotationSecondsValue').textContent=`${rotationSeconds} ${tr('secondsShort')}`;$('languageChoices').querySelectorAll('button').forEach(button=>{const selected=button.dataset.value===language;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',selected?'true':'false');});render();}
  function allEvents(){return events.filter(event=>event.icsBatchHidden!==true);}
  window.wallpaperPropertyListener={applyUserProperties(properties){if(!properties)return;if(properties.backgroundUrl){const value=String(properties.backgroundUrl.value||'').trim();if(!value)lastImportedBackgroundUrl='';else if(value!==lastImportedBackgroundUrl){lastImportedBackgroundUrl=value;pendingBackgroundUrl=value;if(mediaReady){pendingBackgroundUrl='';importBackgroundUrl(value);}}}if(properties.brandTitle){brandTitleOverride=String(properties.brandTitle.value||'').trim()||null;$('brandTitle').textContent=brandTitleOverride||tr('brand');}if(properties.brandSubtitle){brandSubtitleOverride=String(properties.brandSubtitle.value||'').trim()||null;$('brandSubtitle').textContent=brandSubtitleOverride||tr('brandSub');}if(properties.dockPosition)setDockPosition(properties.dockPosition.value);if(properties.fontFamily)setFontFamily(properties.fontFamily.value);if(properties.accentColor)applyColorProperty(properties.accentColor.value,'--mint',1);if(properties.textColor)applyColorProperty(properties.textColor.value,'--text',1);if(properties.mutedColor)applyColorProperty(properties.mutedColor.value,'--muted',1);if(properties.panelColor)applyColorProperty(properties.panelColor.value,'--panel',.96);if(properties.borderColor)applyColorProperty(properties.borderColor.value,'--line',.20);if(properties.wallpaperStartColor)applyColorProperty(properties.wallpaperStartColor.value,'--wallpaper-start',1);if(properties.wallpaperEndColor)applyColorProperty(properties.wallpaperEndColor.value,'--wallpaper-end',1);if(properties.wallpaperGradient)wallpaperGradient=String(properties.wallpaperGradient.value||'radial');if(properties.wallpaperShade){const shade=Math.max(0,Math.min(100,Number(properties.wallpaperShade.value)||0));document.documentElement.style.setProperty('--shade-opacity',String(shade/100));}applyWallpaperGradient();const calendarColors={calendarBgColor:'--calendar-bg',cellColor:'--cell-bg',dayTextColor:'--day-text',todayColor:'--today-color',todayTextColor:'--today-text',weekdayColor:'--weekday-text',eventTextColor:'--event-text',eventMintColor:'--event-mint',eventBlueColor:'--event-blue',eventAmberColor:'--event-amber',eventRoseColor:'--event-rose'};for(const [key,variable] of Object.entries(calendarColors)){if(properties[key])applyColorProperty(properties[key].value,variable,variable==='--calendar-bg' ? 0.30 : variable==='--cell-bg' ? 0.34 : 1); }}};
  function dateKey(date) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
  function safeText(text) { return String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function unescapeIcs(value) { return value.replace(/\\n/gi,' ').replace(/\\,/g,',').replace(/\\;/g,';').replace(/\\\\/g,'\\'); }
  function parseIcsDate(value) {
    const match = value.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?/);
    if (!match) return null;
    if (match[7]) return dateKey(new Date(Date.UTC(+match[1],+match[2]-1,+match[3],+(match[4]||0),+(match[5]||0),+(match[6]||0))));
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  function parseIcsStart(value){const match=value.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?/);if(!match)return null;const date=`${match[1]}-${match[2]}-${match[3]}`;if(!match[4])return{date,time:''};if(match[7]){const local=new Date(Date.UTC(+match[1],+match[2]-1,+match[3],+match[4],+match[5],+(match[6]||0)));return{date:dateKey(local),time:`${String(local.getHours()).padStart(2,'0')}:${String(local.getMinutes()).padStart(2,'0')}`};}return{date,time:`${match[4]}:${match[5]}`};}
  function icsOccurrences(startKey, ruleLine) {
    if (!ruleLine) return [startKey];
    const rule = {};
    ruleLine.split(';').forEach(part => { const [key,value] = part.split('='); if(key&&value)rule[key.toUpperCase()]=value.toUpperCase(); });
    const freq=rule.FREQ, interval=Math.max(1,parseInt(rule.INTERVAL||'1',10)), maxCount=Math.min(512,Math.max(1,parseInt(rule.COUNT||'512',10)));
    if(!['DAILY','WEEKLY','MONTHLY','YEARLY'].includes(freq))return [startKey];
    const [sy,sm,sd]=startKey.split('-').map(Number), start=new Date(sy,sm-1,sd), startMs=start.getTime();
    const until=rule.UNTIL?parseIcsDate(rule.UNTIL):null;
    const today=new Date(); const limit=new Date(today.getFullYear()+2,today.getMonth(),today.getDate());
    let end=until?new Date(+until.slice(0,4),+until.slice(5,7)-1,+until.slice(8,10)):limit;
    if(end>limit)end=limit;
    if(end<start)return [];
    const byDay=rule.BYDAY?rule.BYDAY.split(',').map(code=>({code:code.slice(-2),day:['SU','MO','TU','WE','TH','FR','SA'].indexOf(code.slice(-2))})).filter(x=>x.day>=0):[];
    const byMonthDay=rule.BYMONTHDAY?rule.BYMONTHDAY.split(',').map(Number).filter(n=>n>0):[];
    const out=[]; let ordinal=0; const maxDays=Math.min(5000,Math.ceil((end-start)/86400000)+1);
    for(let offset=0;offset<maxDays;offset++){
      const date=new Date(startMs); date.setDate(start.getDate()+offset);
      const elapsed=offset, monthDiff=(date.getFullYear()-sy)*12+date.getMonth()-(sm-1), yearDiff=date.getFullYear()-sy;
      let match=false;
      if(freq==='DAILY') match=elapsed%interval===0;
      if(freq==='WEEKLY'){
        const weekStart=new Date(start); weekStart.setDate(start.getDate()-((start.getDay()+6)%7));
        const currentWeek=new Date(date); currentWeek.setDate(date.getDate()-((date.getDay()+6)%7));
        const weeks=Math.round((currentWeek-weekStart)/604800000);
        match=weeks>=0&&weeks%interval===0&&(byDay.length?byDay.some(x=>x.day===date.getDay()):date.getDay()===start.getDay());
      }
      if(freq==='MONTHLY') match=monthDiff>=0&&monthDiff%interval===0&&(byMonthDay.length?byMonthDay.includes(date.getDate()):date.getDate()===sd)&&(!byDay.length||byDay.some(x=>x.day===date.getDay()));
      if(freq==='YEARLY') match=yearDiff>=0&&yearDiff%interval===0&&date.getMonth()===sm-1&&date.getDate()===sd;
      if(!match)continue;
      const key=dateKey(date); ordinal++;
      if(rule.COUNT&&ordinal>maxCount)break;
      out.push(key);
    }
    return out.length?out:[startKey];
  }
  function parseIcs(text) {
    const lines=text.replace(/^\uFEFF/,'').replace(/\r?\n[ \t]/g,'').split(/\r?\n/);
    const imported=[]; let current=null;
    for(const line of lines){
      if(line==='BEGIN:VEVENT'){current={};continue;}
      if(line==='END:VEVENT'){
        if(current){const startProp=current.DTSTART;const start=startProp&&parseIcsStart(startProp.value);const title=current.SUMMARY?unescapeIcs(current.SUMMARY.value):'';
          if(start&&title&&(!current.STATUS||current.STATUS.value.toUpperCase()!=='CANCELLED')){const uid=current.UID?unescapeIcs(current.UID.value):`${title}-${start.date}`;const base=`ics:${encodeURIComponent(uid)}`;const dates=icsOccurrences(start.date,current.RRULE&&current.RRULE.value);for(const date of dates)imported.push({id:`${base}:${date}`,icsUid:uid,source:'ics',date,time:start.time,name:title.slice(0,70),color:'blue'});}}
        current=null;continue;
      }
      if(!current)continue;
      const split=line.indexOf(':');if(split<1)continue;
      const left=line.slice(0,split).split(';');const key=left[0].toUpperCase();
      if(['DTSTART','SUMMARY','UID','RRULE','STATUS'].includes(key))current[key]={value:line.slice(split+1),params:left.slice(1)};
    }
    return imported;
  }
  const fallbackMediaKey='wallpaperCalendarMediaFallback';
  function readFallbackRecords(){try{const parsed=JSON.parse(localStorage.getItem(fallbackMediaKey)||'[]');return Array.isArray(parsed)?parsed:[];}catch{return[];}}
  function blobToDataUrl(blob){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result));reader.onerror=()=>reject(reader.error||new Error('Unable to read media'));reader.readAsDataURL(blob);});}
  function dataUrlToBlob(value){try{const comma=value.indexOf(',');if(comma<0)return null;const header=value.slice(0,comma),binary=atob(value.slice(comma+1)),bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);const type=(header.match(/^data:([^;]+)/)||[])[1]||'';return new Blob([bytes],{type});}catch{return null;}}
  function openMediaDb(){return new Promise(resolve=>{try{if(!window.indexedDB){resolve(null);return;}const request=indexedDB.open('wallpaperCalendarMedia',1);request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains('backgrounds'))request.result.createObjectStore('backgrounds',{keyPath:'id'});};request.onsuccess=()=>{mediaDb=request.result;resolve(mediaDb);};request.onerror=()=>resolve(null);request.onblocked=()=>resolve(null);}catch{resolve(null);}});}
  async function saveMediaItem(item){
    if(mediaDb){try{await new Promise((resolve,reject)=>{const tx=mediaDb.transaction('backgrounds','readwrite');tx.objectStore('backgrounds').put(item);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('Media transaction aborted'));});return;}catch{mediaDb=null;}}
    const records=readFallbackRecords(),record={...item};delete record.blob;
    if(item.blob)record.blobData=await blobToDataUrl(item.blob);
    const existing=records.findIndex(entry=>entry.id===record.id);if(existing>=0)records[existing]=record;else records.push(record);
    localStorage.setItem(fallbackMediaKey,JSON.stringify(records));
  }
  async function deleteMediaItem(id){
    if(mediaDb){try{await new Promise((resolve,reject)=>{const tx=mediaDb.transaction('backgrounds','readwrite');tx.objectStore('backgrounds').delete(id);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('Media transaction aborted'));});return;}catch{mediaDb=null;}}
    const records=readFallbackRecords().filter(item=>item.id!==id);localStorage.setItem(fallbackMediaKey,JSON.stringify(records));
  }
  async function loadMediaItems(){
    if(mediaDb){try{return await new Promise((resolve,reject)=>{const request=mediaDb.transaction('backgrounds','readonly').objectStore('backgrounds').getAll();request.onsuccess=()=>resolve(request.result||[]);request.onerror=()=>reject(request.error);});}catch{mediaDb=null;}}
    return readFallbackRecords().map(record=>{const item={...record};if(record.blobData){item.blob=dataUrlToBlob(record.blobData);if(!item.blob)return null;}delete item.blobData;return item;}).filter(Boolean);
  }
  async function seedExampleBackgrounds(){
    let seeded=false;try{seeded=localStorage.getItem('wallpaperExampleBackgroundsSeeded')==='yes';}catch{}
    if(seeded&&mediaItems.length)return;
    const examples=[
      {id:'builtin-mountains-day',name:'Example mountains — day',type:'image/jpeg',sourceUrl:'assets/mountains-day.jpg',useWithCalendar:true,useWithoutCalendar:false},
      {id:'builtin-mountains-night',name:'Example mountains — night',type:'image/jpeg',sourceUrl:'assets/mountains-night.jpg',useWithCalendar:false,useWithoutCalendar:true}
    ];
    try{for(const item of examples){if(!mediaItems.some(existing=>existing.id===item.id)){await saveMediaItem(item);mediaItems.push(item);}}mediaItems.sort((a,b)=>a.id.localeCompare(b.id));try{localStorage.setItem('wallpaperExampleBackgroundsSeeded','yes');}catch{}}catch{flash(tr('mediaError'));}
  }
  function isVideoItem(item){return (item.type||'').startsWith('video/')||/\.(webm|ogv|ogg)$/i.test(item.name||'');}
  function activeProfile(){return document.body.classList.contains('calendar-hidden')?'hidden':'visible';}
  function profileStorageKey(profile=activeProfile()){return `wallpaperMedia${profile==='hidden'?'Hidden':'Visible'}`;}
  function activeMediaEntries(){const profile=activeProfile();return mediaItems.map((item,index)=>({item,index})).filter(entry=>profile==='hidden'?entry.item.useWithoutCalendar===true:entry.item.useWithCalendar!==false);}
  function showProfileMedia(fallbackIndex=-1){const entries=activeMediaEntries();let selectedId='';try{selectedId=localStorage.getItem(profileStorageKey())||'';}catch{}let selected=entries.find(entry=>entry.item.id===selectedId);if(!selected&&fallbackIndex>=0)selected=entries.find(entry=>entry.index===fallbackIndex);if(!selected&&currentMediaIndex>=0)selected=entries.find(entry=>entry.index===currentMediaIndex);if(!selected)selected=entries[0];showMedia(selected?selected.index:-1);}
  async function setMediaAssignment(id,profile){const item=mediaItems.find(entry=>entry.id===id);if(!item)return;const key=profile==='hidden'?'useWithoutCalendar':'useWithCalendar';item[key]=!item[key];try{if(mediaDb)await saveMediaItem(item);}catch{flash(tr('mediaError'));return;}const index=mediaItems.indexOf(item);if(profile===activeProfile()){if(!item[key]&&currentMediaIndex===index)showProfileMedia();else if(item[key]&&currentMediaIndex<0)showMedia(index);else renderMediaLibrary();}else renderMediaLibrary();}
  function scheduleBackgroundRotation(){clearTimeout(rotationTimer);rotationTimer=null;const entries=activeMediaEntries();if(!autoChangeBackgrounds||entries.length<2||currentMediaIndex<0)return;const current=mediaItems[currentMediaIndex];if(isVideoItem(current)&&!loopVideos)return;rotationTimer=setTimeout(()=>cycleMedia(1),rotationSeconds*1000);}
  function applyImageFitToLayers(){const classNames=['image-fit-stretch','image-fit-tile','image-fit-contain','image-fit-center'];[$('mediaImage'),$('mediaImageAlt')].forEach(image=>{image.classList.remove(...classNames);image.classList.add(`image-fit-${imageFitMode}`);});}
  function showMedia(index){
    applyImageFitToLayers();
    const images=[$('mediaImage'),$('mediaImageAlt')],videos=[$('backgroundVideo'),$('backgroundVideoAlt')];
    const entries=activeMediaEntries(),valid=mediaItems.length&&index>=0&&index<mediaItems.length&&entries.some(entry=>entry.index===index);
    const token=++mediaTransitionToken;clearTimeout(mediaTransitionTimer);clearTimeout(rotationTimer);
    const revoke=url=>{if(url&&url.startsWith('blob:'))URL.revokeObjectURL(url);};
    const clearVideo=video=>{video.pause();video.removeAttribute('src');video.load();video.hidden=true;video.onended=null;video.onerror=null;};
    const finish=type=>{if(token!==mediaTransitionToken)return;for(let i=0;i<2;i++){if(type==='video'||i!==activeImageLayer){images[i].style.backgroundImage='';revoke(imageLayerUrls[i]);imageLayerUrls[i]=null;}if(type==='image'||i!==activeVideoLayer){clearVideo(videos[i]);revoke(videoLayerUrls[i]);videoLayerUrls[i]=null;}}};
    if(!valid){
      currentMediaIndex=-1;$('backgroundCount').textContent=`0 / ${entries.length}`;
      images.forEach(image=>image.style.opacity='0');videos.forEach(video=>video.style.opacity='0');
      mediaTransitionTimer=setTimeout(()=>{if(token!==mediaTransitionToken)return;images.forEach((image,i)=>{image.style.backgroundImage='';revoke(imageLayerUrls[i]);imageLayerUrls[i]=null;});videos.forEach((video,i)=>{clearVideo(video);revoke(videoLayerUrls[i]);videoLayerUrls[i]=null;});},mediaFadeMs);
      try{localStorage.removeItem('wallpaperMediaIndex');localStorage.removeItem(profileStorageKey());}catch{}
      renderMediaLibrary();return;
    }
    currentMediaIndex=index;const item=mediaItems[index],position=entries.findIndex(entry=>entry.index===index),url=item.blob?URL.createObjectURL(item.blob):item.sourceUrl;
    $('backgroundCount').textContent=`${position+1} / ${entries.length}`;
    const beginFade=target=>{
      if(token!==mediaTransitionToken)return;
      const outgoingImage=activeImageLayer,outgoingVideo=activeVideoLayer;
      if(target.type==='image'){
        images[target.layer].style.opacity='1';images[outgoingImage].style.opacity='0';
        videos.forEach(video=>video.style.opacity='0');activeImageLayer=target.layer;
      }else{
        videos[target.layer].style.opacity='1';images.forEach(image=>image.style.opacity='0');videos[outgoingVideo].style.opacity='0';activeVideoLayer=target.layer;
      }
      mediaTransitionTimer=setTimeout(()=>finish(target.type),mediaFadeMs+80);
    };
    if(isVideoItem(item)){
      const layer=1-activeVideoLayer,video=videos[layer];revoke(videoLayerUrls[layer]);videoLayerUrls[layer]=url;
      video.style.opacity='0';video.hidden=false;video.loop=loopVideos;video.onended=()=>{if(!loopVideos&&activeMediaEntries().length>1)cycleMedia(1);};
      video.onerror=()=>{if(token===mediaTransitionToken)flash(tr('videoAutoplay'));};
      video.onloadeddata=()=>{if(token!==mediaTransitionToken)return;const play=video.play();if(play&&play.catch)play.catch(()=>flash(tr('videoAutoplay')));beginFade({type:'video',layer});video.onloadeddata=null;};
      video.src=url;video.load();
    }else{
      const layer=1-activeImageLayer,image=images[layer];revoke(imageLayerUrls[layer]);imageLayerUrls[layer]=url;
      image.style.opacity='0';image.style.backgroundImage=`url("${url}")`;
      const preload=new Image();preload.onload=()=>beginFade({type:'image',layer});preload.onerror=()=>beginFade({type:'image',layer});preload.src=url;
    }
    try{localStorage.setItem('wallpaperMediaIndex',String(index));localStorage.setItem(profileStorageKey(),item.id);}catch{}
    renderMediaLibrary();scheduleBackgroundRotation();
  }
  function renderMediaLibrary(){const list=$('backgroundLibrary');if(!list)return;mediaPreviewUrls.forEach(url=>URL.revokeObjectURL(url));mediaPreviewUrls=[];if(!mediaItems.length){list.innerHTML=`<div class="library-empty">${safeText(tr('libraryEmpty'))}</div>`;return;}list.innerHTML=mediaItems.map((item,index)=>{const video=isVideoItem(item),preview=video?'':item.blob?URL.createObjectURL(item.blob):item.sourceUrl,visible=item.useWithCalendar!==false,hidden=item.useWithoutCalendar===true;if(item.blob&&!video)mediaPreviewUrls.push(preview);return `<div class="library-row ${index===currentMediaIndex?'active':''}"><button class="library-select" type="button" data-index="${index}" aria-pressed="${index===currentMediaIndex?'true':'false'}"><span class="library-thumb ${video?'video-thumb':''}" ${video?'':'style="background-image:url(\''+preview+'\')"'}>${video?'▶':''}</span><span class="library-meta"><span class="library-name">${safeText(item.name)}</span><span class="library-kind">${video?'VIDEO':'IMAGE'}</span></span></button><button class="library-delete" type="button" data-id="${safeText(item.id)}" aria-label="${safeText(tr('deleteBackground'))}" title="${safeText(tr('deleteBackground'))}">×</button><div class="library-actions"><button class="profile-chip ${visible?'selected':''}" type="button" data-id="${safeText(item.id)}" data-profile="visible" aria-pressed="${visible}">${safeText(tr('profileVisible'))}</button><button class="profile-chip ${hidden?'selected':''}" type="button" data-id="${safeText(item.id)}" data-profile="hidden" aria-pressed="${hidden}">${safeText(tr('profileHidden'))}</button></div></div>`;}).join('');list.querySelectorAll('.library-select').forEach(button=>button.addEventListener('click',()=>{const item=mediaItems[Number(button.dataset.index)];if(item&&activeProfile()==='visible'&&item.useWithCalendar===false)item.useWithCalendar=true;if(item&&activeProfile()==='hidden'&&item.useWithoutCalendar!==true)item.useWithoutCalendar=true;if(item)saveMediaItem(item).catch(()=>flash(tr('mediaError')));showMedia(Number(button.dataset.index));}));list.querySelectorAll('.profile-chip').forEach(button=>button.addEventListener('click',()=>setMediaAssignment(button.dataset.id,button.dataset.profile)));list.querySelectorAll('.library-delete').forEach(button=>button.addEventListener('click',()=>removeMediaItem(button.dataset.id)));}
  async function importBackgroundUrl(raw){let parsed;try{parsed=new URL(raw);}catch{flash(tr('mediaFormat'));return;}if(!['http:','https:'].includes(parsed.protocol)){flash(tr('mediaFormat'));return;}let pathName=parsed.pathname.split('/').pop()||'';try{pathName=decodeURIComponent(pathName);}catch{}const queryName=parsed.searchParams.get('filename')||parsed.searchParams.get('name')||'',name=/\.[a-z0-9]{2,5}$/i.test(pathName)?pathName:queryName||pathName||parsed.hostname,extension=(name.split('.').pop()||'').toLowerCase();const types={jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',gif:'image/gif',webp:'image/webp',bmp:'image/bmp',svg:'image/svg+xml',webm:'video/webm',ogv:'video/ogv',ogg:'video/ogg'};const type=types[extension];if(!type){flash(tr('mediaFormat'));return;}const url=parsed.href,existing=mediaItems.findIndex(item=>item.sourceUrl===url);if(existing>=0){showMedia(existing);return;}if(!mediaDb)await openMediaDb();const hidden=activeProfile()==='hidden',item={id:`${String(Date.now()).padStart(13,'0')}-${Math.random().toString(36).slice(2,9)}`,name,type,sourceUrl:url,useWithCalendar:!hidden,useWithoutCalendar:hidden};try{if(mediaDb)await saveMediaItem(item);mediaItems.push(item);mediaItems.sort((a,b)=>a.id.localeCompare(b.id));showMedia(mediaItems.findIndex(entry=>entry.id===item.id));flash(tr('imageAdded'));}catch{flash(tr('mediaError'));}}
  async function removeMediaItem(id){const oldCurrentId=mediaItems[currentMediaIndex]?.id;try{await deleteMediaItem(id);mediaItems=mediaItems.filter(item=>item.id!==id);if(oldCurrentId===id){try{localStorage.removeItem(profileStorageKey());}catch{}showProfileMedia();}else if(oldCurrentId)showMedia(mediaItems.findIndex(item=>item.id===oldCurrentId));else renderMediaLibrary();flash(tr('imageRemoved'));}catch{flash(tr('mediaError'));}}
  function cycleMedia(direction){const entries=activeMediaEntries();if(!entries.length)return;const current=entries.findIndex(entry=>entry.index===currentMediaIndex);const next=current<0?(direction>0?0:entries.length-1):(current+direction+entries.length)%entries.length;showMedia(entries[next].index);}
  async function initMedia(){
    try{await openMediaDb();mediaItems=await loadMediaItems();await seedExampleBackgrounds();
      if(!mediaItems.length){const legacy=localStorage.getItem('wallpaperBackground');if(legacy)$('wallpaper').style.backgroundImage=`url("${legacy}")`;}
      const saved=Number(localStorage.getItem('wallpaperMediaIndex'));markMediaReady();showProfileMedia(Number.isInteger(saved)&&saved>=0&&saved<mediaItems.length?saved:-1);if(pendingBackgroundUrl){const url=pendingBackgroundUrl;pendingBackgroundUrl='';importBackgroundUrl(url);}
    }catch{flash(tr('mediaError'));markMediaReady();}
  }
  function render() {
    const previousCalendarHeight=$('calendar').getBoundingClientRect().height;
    eventTickerTimers.forEach(timer=>clearInterval(timer));eventTickerTimers=[];
    clearInterval(timelineClockTimer);timelineClockTimer=null;
    const focusView=['three-day','week','agenda'].includes(calendarStyle), headingDate=focusView?focusDate:shownMonth;
    const year = headingDate.getFullYear(), month = headingDate.getMonth();
    $('monthLabel').textContent = monthNames[language][month]; $('yearLabel').textContent = String(year);
    const today = dateKey(new Date()), all=allEvents();
    const dayMarkup=(date,mode='month')=>{
      const key=dateKey(date),dayEvents=all.filter(event=>event.date===key),isToday=key===today;
      let relativeLabel=tr('focusDayLabel');
      if(key===today)relativeLabel=tr('todayLabel');
      else if(mode==='focus'){const offset=Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate())-new Date(focusDate.getFullYear(),focusDate.getMonth(),focusDate.getDate()))/86400000);relativeLabel=offset<0?tr('previousDayLabel'):tr('nextDayLabel');}
      const title=mode==='focus'?`<span class="focus-label">${relativeLabel}</span><span class="focus-weekday">${weekdays[language][(date.getDay()+6)%7]}</span>`:'';
      const number=mode==='focus'?`<span class="day-number">${date.getDate()}</span><span class="focus-month">${monthNames[language][date.getMonth()]} ${date.getFullYear()}</span>`:mode==='agenda'?`<span class="agenda-date"><span class="agenda-weekday">${weekdays[language][(date.getDay()+6)%7]}</span><strong>${date.getDate()}</strong><small>${shortMonths[language][date.getMonth()]}</small></span>`:`<span class="day-number">${date.getDate()}</span>`;
      let eventsHtml='';
      if(mode==='agenda'){
        const shown=dayEvents.slice(0,4).map(event=>`<span class="day-event ${event.color||'mint'}">${eventMarkup(event)}</span>`).join('');
        const extra=dayEvents.length>4?`<span class="agenda-more">+${dayEvents.length-4}</span>`:'';
        eventsHtml=`<div class="agenda-events">${shown||`<span class="no-day-events">${safeText(tr('noDayEvents'))}</span>`}${extra}</div>`;
      }else if(mode==='month'&&calendarStyle==='compact'&&dayEvents.length){
        const compact=dayEvents.slice(0,4).map(event=>`<span class="compact-event" title="${safeText(event.name)}"><i class="event-dot ${event.color||'mint'}"></i>${event.time?`<time>${safeText(event.time)}</time>`:''}</span>`).join('');
        const extra=dayEvents.length>4?`<span class="compact-more">+${dayEvents.length-4}</span>`:'';
        eventsHtml=`<div class="compact-event-list">${compact}${extra}</div>`;
      }else if(mode==='month'&&calendarStyle==='week'&&dayEvents.length){
        const shown=dayEvents.slice(0,10).map(event=>`<div class="day-event ${event.color||'mint'}">${eventMarkup(event)}</div>`).join('');
        const extra=dayEvents.length>10?`<span class="week-more">+${dayEvents.length-10} ${safeText(tr('icsPackageCount'))}</span>`:'';
        eventsHtml=`<div class="week-events">${shown}${extra}</div>`;
      }else if(mode==='month'&&dayEvents.length>2){
        const rotating=dayEvents.slice(1).map(event=>`<div class="day-event ${event.color||'mint'}">${eventMarkup(event)}</div>`).join('');
        eventsHtml=`<div class="day-event ${dayEvents[0].color||'mint'}">${eventMarkup(dayEvents[0])}</div><div class="day-events-window"><div class="day-events-track">${rotating}</div><span class="day-event-overflow">+${dayEvents.length-2}</span></div>`;
      }else if(dayEvents.length){
        const wrapper=mode==='focus'?'<div class="focus-events">':'';
        const close=mode==='focus'?'</div>':'';
        const limit=mode==='focus'?7:2,shown=dayEvents.slice(0,limit).map(event=>`<div class="day-event ${event.color||'mint'}">${eventMarkup(event)}</div>`).join(''),extra=dayEvents.length>limit?`<span class="focus-overflow">+${dayEvents.length-limit}</span>`:'';
        eventsHtml=`${wrapper}${shown}${extra}${close}`;
      }else if(mode==='focus')eventsHtml=`<div class="no-day-events">${safeText(tr('noDayEvents'))}</div>`;
      return `<div class="day ${date.getMonth()!==month?'outside':''} ${isToday?'today':''} ${mode==='focus'?'focus-day':''}" data-date="${key}" role="button" tabindex="0" aria-label="${date.getDate()} ${monthNames[language][date.getMonth()]} ${date.getFullYear()}">${title}${number}${eventsHtml}</div>`;
    };
    let html='';
    if(calendarStyle==='three-day'){for(let delta=-1;delta<=1;delta++){const date=new Date(focusDate);date.setDate(date.getDate()+delta);html+=dayMarkup(date,'focus');}}
    else if(calendarStyle==='week'){const start=new Date(focusDate);start.setDate(start.getDate()-((start.getDay()+6)%7));html=weekdays[language].map(name=>`<div class="weekday">${name}</div>`).join('');for(let i=0;i<7;i++){const date=new Date(start);date.setDate(start.getDate()+i);html+=dayMarkup(date);}}
    else if(calendarStyle==='agenda'){const start=new Date(focusDate);start.setDate(start.getDate()-7);for(let i=0;i<15;i++){const date=new Date(start);date.setDate(start.getDate()+i);html+=dayMarkup(date,'agenda');}}
    else {const first=new Date(year,month,1),offset=(first.getDay()+6)%7,start=new Date(year,month,1-offset),count=Math.ceil((offset+new Date(year,month+1,0).getDate())/7)*7;html=weekdays[language].map(name=>`<div class="weekday">${name}</div>`).join('');for(let i=0;i<count;i++){const date=new Date(start);date.setDate(start.getDate()+i);html+=dayMarkup(date);}}
    const calendar=$('calendar'),selectedDay=expandedDate?all.filter(event=>event.date===expandedDate):[];
    if(expandedDate&&selectedDay.length){
      const [selectedYear,selectedMonth,selectedNumber]=expandedDate.split('-').map(Number),selectedDate=new Date(selectedYear,selectedMonth-1,selectedNumber),weekday=weekdays[language][(selectedDate.getDay()+6)%7];
      selectedDay.sort((a,b)=>(a.time||'').localeCompare(b.time||'')||a.name.localeCompare(b.name));
      calendar.classList.add('day-planogram-mode');calendar.style.setProperty('--day-plan-height',`${Math.max(previousCalendarHeight,360)}px`);
      const isToday=expandedDate===dateKey(new Date()),timedEvents=selectedDay.filter(event=>/^\d{2}:\d{2}$/.test(event.time||'')),allDayEvents=selectedDay.filter(event=>!/^\d{2}:\d{2}$/.test(event.time||'')),eventsByHour=Array.from({length:24},()=>[]);
      timedEvents.forEach(event=>eventsByHour[Number(event.time.slice(0,2))].push(event));
      const allDayMarkup=allDayEvents.length?`<div class="day-timeline-allday">${allDayEvents.map(event=>`<article class="timeline-event all-day ${event.color||'mint'}"><time>${safeText(tr('allDay'))}</time><span>${safeText(event.name)}</span></article>`).join('')}</div>`:'';
      const hoursMarkup=eventsByHour.map((hourEvents,hour)=>`<div class="day-timeline-hour" data-hour="${hour}"><div class="timeline-hour-label">${String(hour).padStart(2,'0')}:00</div><div class="timeline-hour-events">${hourEvents.map(event=>{const [h,m]=event.time.split(':').map(Number);return `<article class="timeline-event ${event.color||'mint'}" data-event-minute="${h*60+m}"><time>${safeText(event.time)}</time><span>${safeText(event.name)}</span></article>`;}).join('')}</div></div>`).join('');
      calendar.classList.add('day-planogram-mode');calendar.style.setProperty('--day-plan-height',`${Math.max(previousCalendarHeight,360)}px`);
      calendar.innerHTML=`<section class="day-planogram"><header class="day-planogram-header"><div><div class="day-planogram-weekday">${safeText(weekday)}</div><h2>${selectedNumber} ${safeText(monthNames[language][selectedMonth-1])} ${selectedYear}</h2><span class="day-planogram-count">${selectedDay.length} ${safeText(tr('icsPackageCount'))}</span></div><div class="day-planogram-header-actions">${isToday?`<span class="day-now-label"><i></i><time class="day-now-time"></time></span>`:''}<button class="day-planogram-close" type="button" aria-label="${safeText(tr('close'))}">×</button></div></header><div class="day-timeline-scroll">${allDayMarkup}<div class="day-timeline-grid">${hoursMarkup}${isToday?'<div class="day-now-marker"><span class="day-now-badge"></span></div>':''}</div></div></section>`;
      calendar.querySelector('.day-planogram-close').addEventListener('click',()=>{expandedDate=null;render();});
      if(isToday){const scroll=calendar.querySelector('.day-timeline-scroll'),grid=calendar.querySelector('.day-timeline-grid');const updateClock=()=>{const now=new Date(),hour=now.getHours(),minute=now.getMinutes(),row=grid.querySelector(`[data-hour="${hour}"]`),marker=grid.querySelector('.day-now-marker');if(!row||!marker)return;if(timelineOrientation==='horizontal')marker.style.left=`${row.offsetLeft+row.offsetWidth*minute/60}px`;else marker.style.top=`${row.offsetTop+row.offsetHeight*minute/60}px`;const label=calendar.querySelector('.day-now-time'),badge=calendar.querySelector('.day-now-badge'),time=`${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}`;if(label)label.textContent=time;if(badge)badge.textContent=time;calendar.querySelectorAll('.timeline-event[data-event-minute]').forEach(card=>card.classList.toggle('is-past',Number(card.dataset.eventMinute)<hour*60+minute));};updateClock();const now=new Date(),targetRow=grid.querySelector(`[data-hour="${now.getHours()}"]`);if(targetRow){if(timelineOrientation==='horizontal')scroll.scrollLeft=Math.max(0,targetRow.offsetLeft-scroll.clientWidth*.35);else scroll.scrollTop=Math.max(0,targetRow.offsetTop-scroll.clientHeight*.35);}timelineClockTimer=setInterval(updateClock,15000);}
    }else{
      expandedDate=null;calendar.classList.remove('day-planogram-mode');calendar.style.removeProperty('--day-plan-height');calendar.innerHTML=html;
      calendar.querySelectorAll('.day-events-track').forEach(track=>{const count=track.children.length;if(count<2)return;let index=0;eventTickerTimers.push(setInterval(()=>{index=(index+1)%count;track.style.transform=`translateY(-${index*18}px)`;},4400));});
      calendar.querySelectorAll('.day').forEach(cell=>{const open=()=>{const hasEvents=all.some(event=>event.date===cell.dataset.date);expandedDate=hasEvents?cell.dataset.date:null;render();};cell.addEventListener('click',open);cell.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});});
    }
    const eventTotal=allEvents().length;$('eventCount').textContent = `${eventTotal} ${eventTotal===1?tr('oneEvent'):language==='pl'&&eventTotal>=2&&eventTotal<=4?tr('fewEvents'):tr('manyEvents')}`;
    renderEventList();
  }
  function renderEventList() {
    const eventRow=event=>`<div class="event-row"><i class="event-dot ${event.color||'mint'}"></i><div class="event-row-main"><div class="event-row-name">${safeText(event.name)}</div><div class="event-row-date">${formatDate(event.date)}${event.time?` · ${safeText(event.time)}`:''}</div></div><button class="edit-button" data-id="${safeText(event.id)}" aria-label="${safeText(tr('deleteEventToast'))}">×</button></div>`;
    const batchKey=event=>event.icsBatch||'ics:legacy';
    const regular=events.filter(event=>event.source!=='ics').sort((a,b)=>a.date.localeCompare(b.date)||(a.time||'').localeCompare(b.time||''));
    const grouped=new Map();events.filter(event=>event.source==='ics').forEach(event=>{const id=batchKey(event);if(!grouped.has(id))grouped.set(id,[]);grouped.get(id).push(event);});
    const packages=Array.from(grouped,([id,items])=>{items.sort((a,b)=>a.date.localeCompare(b.date)||(a.time||'').localeCompare(b.time||''));const hidden=items.every(item=>item.icsBatchHidden===true),name=items.find(item=>item.icsBatchName)?.icsBatchName||tr('icsPackage');return `<details class="event-package" data-package="${safeText(id)}" ${openEventGroups.has(id)?'open':''}><summary><span class="package-name">${safeText(name)}</span><span class="package-count">${items.length} ${safeText(tr('icsPackageCount'))}</span><span class="package-state">${hidden?safeText(tr('icsHidden')):''}</span></summary><div class="event-package-actions"><button type="button" class="package-toggle" data-package="${safeText(id)}">${safeText(hidden?tr('icsShow'):tr('icsHide'))}</button><button type="button" class="package-delete" data-package="${safeText(id)}">${safeText(tr('icsDelete'))}</button></div><div class="event-package-items">${items.map(eventRow).join('')}</div></details>`;}).join('');
    const hasAnything=regular.length||grouped.size;
    $('eventList').innerHTML=hasAnything?`${regular.map(eventRow).join('')}${packages}`:`<div class="empty-events">${safeText(tr('emptyEvents'))}</div>`;
    $('eventList').querySelectorAll('.event-package').forEach(details=>details.addEventListener('toggle',()=>{const id=details.dataset.package;if(details.open)openEventGroups.add(id);else openEventGroups.delete(id);try{localStorage.setItem('calendarOpenEventGroups',JSON.stringify([...openEventGroups]));}catch{}}));
    $('eventList').querySelectorAll('.edit-button').forEach(button=>button.addEventListener('click',()=>{events=events.filter(item=>item.id!==button.dataset.id);saveEvents();render();flash(tr('deleteEventToast'));}));
    $('eventList').querySelectorAll('.package-toggle').forEach(button=>button.addEventListener('click',()=>{const id=button.dataset.package,hidden=!events.filter(item=>item.source==='ics'&&batchKey(item)===id).every(item=>item.icsBatchHidden===true);events.forEach(item=>{if(item.source==='ics'&&batchKey(item)===id)item.icsBatchHidden=hidden;});saveEvents();render();}));
    $('eventList').querySelectorAll('.package-delete').forEach(button=>button.addEventListener('click',()=>{const id=button.dataset.package;events=events.filter(item=>item.source!=='ics'||batchKey(item)!==id);openEventGroups.delete(id);saveEvents();render();}));
  }
  function formatDate(key) { const [y,m,d]=key.split('-').map(Number); return `${d} ${shortMonths[language][m-1]} ${y}`; }
  function eventMarkup(event){return `${event.time?`<time class="event-time" datetime="${safeText(event.time)}">${safeText(event.time)}</time> `:''}${safeText(event.name)}`;}
  function setMonth(date) { shownMonth = new Date(date.getFullYear(),date.getMonth(),1);const day=Math.min(focusDate.getDate(),new Date(date.getFullYear(),date.getMonth()+1,0).getDate());focusDate=new Date(date.getFullYear(),date.getMonth(),day);render(); }
  function flash(message) { const toast=$('toast'); toast.textContent=message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove('show'),2400); }
  $('prevMonth').addEventListener('click',()=>setMonth(new Date(shownMonth.getFullYear(),shownMonth.getMonth()-1,1)));
  $('nextMonth').addEventListener('click',()=>setMonth(new Date(shownMonth.getFullYear(),shownMonth.getMonth()+1,1)));
  $('todayButton').addEventListener('click',()=>{focusDate=new Date();setMonth(focusDate);});
  $('settingsToggle').addEventListener('click',()=>{$('settings').hidden=false;});
  $('closeSettings').addEventListener('click',()=>{$('settings').hidden=true;});
  function setSettingsPage(value){const valid=['calendar','backgrounds','events'].includes(value)?value:'backgrounds';document.querySelectorAll('.settings-page').forEach(page=>{page.hidden=page.id!==`settingsPage-${valid}`;});document.querySelectorAll('[data-settings-page]').forEach(button=>{const selected=button.dataset.settingsPage===valid;button.classList.toggle('selected',selected);button.setAttribute('aria-selected',selected?'true':'false');});try{localStorage.setItem('settingsPage',valid);}catch{}}
  document.querySelectorAll('[data-settings-page]').forEach(button=>button.addEventListener('click',()=>setSettingsPage(button.dataset.settingsPage)));
  try{setSettingsPage(localStorage.getItem('settingsPage')||'backgrounds');}catch{setSettingsPage('backgrounds');}
  $('languageChoices').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{try{localStorage.setItem('calendarLanguage',button.dataset.value);}catch{}applyLanguage(button.dataset.value);}));
  function setRatioChoice(value) { const valid=['auto','16:9','21:9','4:3'].includes(value)?value:'auto';document.body.classList.remove('ratio-16-9','ratio-21-9','ratio-4-3');if(valid!=='auto')document.body.classList.add(`ratio-${valid.replace(':','-')}`);$('ratioChoices').querySelectorAll('button').forEach(button=>{const selected=button.dataset.value===valid;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',selected?'true':'false');});try{localStorage.setItem('wallpaperRatio',valid);}catch{}}
  $('ratioChoices').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>setRatioChoice(button.dataset.value)));
  function setCalendarStyle(value){const valid=['grid','minimal','cards','three-day','week','agenda','compact','bento','editorial'].includes(value)?value:'grid';document.body.classList.remove(...Array.from($('styleChoices').querySelectorAll('button'),button=>`calendar-style-${button.dataset.style}`));document.body.classList.add(`calendar-style-${valid}`);calendarStyle=valid;$('styleChoices').querySelectorAll('button').forEach(button=>{const selected=button.dataset.style===valid;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',selected?'true':'false');});try{localStorage.setItem('calendarStyle',valid);}catch{}render();}
  function setTimelineOrientation(value){timelineOrientation=value==='horizontal'?'horizontal':'vertical';document.body.classList.toggle('timeline-horizontal',timelineOrientation==='horizontal');$('timelineOrientationChoices').querySelectorAll('button').forEach(button=>{const selected=button.dataset.value===timelineOrientation;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',selected?'true':'false');});try{localStorage.setItem('dayTimelineOrientation',timelineOrientation);}catch{}render();}
  $('timelineOrientationChoices').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>setTimelineOrientation(button.dataset.value)));
  $('styleChoices').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>setCalendarStyle(button.dataset.style)));
  function setDockPosition(value){const valid=['top','left','right','bottom'].includes(value)?value:'top';document.body.classList.remove('dock-position-top','dock-position-left','dock-position-right','dock-position-bottom');document.body.classList.add(`dock-position-${valid}`);const symbols={top:['⌃','⌄'],left:['‹','›'],right:['›','‹'],bottom:['⌄','⌃']};$('dockHide').textContent=symbols[valid][0];$('dockReveal').textContent=symbols[valid][1];}
  function setFontFamily(value){const fonts={system:['Segoe UI', 'Arial', 'sans-serif'],rounded:['Trebuchet MS','Arial','sans-serif'],serif:['Georgia','serif'],mono:['Consolas','monospace']};const selected=fonts[value]||fonts.system;const css=selected.map(name=>name.includes(' ')?`"${name}"`:name).join(',');document.documentElement.style.setProperty('--font-body',css);document.documentElement.style.setProperty('--font-display',css);}
  function applyColorProperty(value,variable,alpha){const channels=String(value||'').trim().split(/\s+/).slice(0,3).map(channel=>Math.round(Math.max(0,Math.min(1,Number(channel)))*255));if(channels.length!==3||channels.some(channel=>!Number.isFinite(channel)))return;const color=`rgba(${channels.join(',')},${alpha})`;document.documentElement.style.setProperty(variable,color);if(variable==='--mint'){document.documentElement.style.setProperty('--accent-soft',`rgba(${channels.join(',')},.60)`);document.documentElement.style.setProperty('--accent-faint',`rgba(${channels.join(',')},.12)`);}if(variable==='--panel'){document.documentElement.style.setProperty('--dock-bg',`rgba(${channels.join(',')},.62)`);document.documentElement.style.setProperty('--handle-bg',`rgba(${channels.join(',')},.88)`);}if(variable==='--today-color'){document.documentElement.style.setProperty('--today-surface',`rgba(${channels.join(',')},.38)`);document.documentElement.style.setProperty('--today-outline',`rgba(${channels.join(',')},.92)`);}}
  function setImageFit(value){const valid=['stretch','tile','contain','center'].includes(value)?value:'stretch';imageFitMode=valid;applyImageFitToLayers();$('imageFitChoices').querySelectorAll('button').forEach(button=>{const selected=button.dataset.fit===valid;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',selected?'true':'false');});try{localStorage.setItem('wallpaperImageFit',valid);}catch{}}
  $('imageFitChoices').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>setImageFit(button.dataset.fit)));
  function selectChoice(id,value){$(id).querySelectorAll('button').forEach(button=>{const selected=button.dataset.value===value;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',selected?'true':'false');});}
  function setAutoChangeBackgrounds(value){autoChangeBackgrounds=value==='yes';selectChoice('autoChangeChoices',autoChangeBackgrounds?'yes':'no');try{localStorage.setItem('backgroundAutoChange',autoChangeBackgrounds?'yes':'no');}catch{}scheduleBackgroundRotation();}
  $('autoChangeChoices').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>setAutoChangeBackgrounds(button.dataset.value)));
  function setRotationSeconds(value){rotationSeconds=Math.max(5,Math.min(600,Math.round(Number(value)/5)*5));$('rotationSeconds').value=String(rotationSeconds);$('rotationSecondsValue').textContent=`${rotationSeconds} ${tr('secondsShort')}`;try{localStorage.setItem('backgroundRotationSeconds',String(rotationSeconds));}catch{}scheduleBackgroundRotation();}
  $('rotationSeconds').addEventListener('input',event=>setRotationSeconds(event.target.value));
  function setLoopVideos(value){loopVideos=value==='yes';selectChoice('loopVideoChoices',loopVideos?'yes':'no');[$('backgroundVideo'),$('backgroundVideoAlt')].forEach(video=>video.loop=loopVideos);try{localStorage.setItem('backgroundLoopVideos',loopVideos?'yes':'no');}catch{}scheduleBackgroundRotation();}
  $('loopVideoChoices').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>setLoopVideos(button.dataset.value)));
  function setCalendarHidden(hidden){document.body.classList.toggle('calendar-hidden',hidden);$('calendarToggle').textContent=tr(hidden?'showCalendar':'hideCalendar');try{localStorage.setItem('calendarHidden',hidden?'1':'0');}catch{}if(mediaReady)showProfileMedia();}
  $('calendarToggle').addEventListener('click',()=>setCalendarHidden(!document.body.classList.contains('calendar-hidden')));
  try{setCalendarHidden(localStorage.getItem('calendarHidden')!=='0');}catch{setCalendarHidden(true);}
  function setDockHidden(hidden){document.body.classList.toggle('dock-hidden',hidden);$('dockReveal').hidden=!hidden;try{localStorage.setItem('dockHidden',hidden?'1':'0');}catch{}}
  $('dockHide').addEventListener('click',()=>setDockHidden(true));
  $('dockReveal').addEventListener('click',()=>setDockHidden(false));
  try{setDockHidden(localStorage.getItem('dockHidden')==='1');}catch{setDockHidden(false);}
  $('previousBackground').addEventListener('click',()=>cycleMedia(-1));
  $('nextBackground').addEventListener('click',()=>cycleMedia(1));
  $('backgroundFiles').addEventListener('change',async e=>{
    const files=Array.from(e.target.files||[]);if(!files.length)return;
    await mediaReadyPromise;
    if(!mediaDb){try{await openMediaDb();}catch{}}
    if(!mediaDb){flash(tr('mediaError'));e.target.value='';return;}
    let added=0;
    for(const file of files){
      const video=/\.(webm|ogv|ogg)$/i.test(file.name)||(file.type||'').startsWith('video/');
      if(video&&!/\.(webm|ogv|ogg)$/i.test(file.name)){flash(tr('mediaFormat'));continue;}
      if(!video&&!(file.type||'').startsWith('image/')){flash(tr('mediaFormat'));continue;}
      try{const id=`${String(Date.now()).padStart(13,'0')}-${Math.random().toString(36).slice(2,9)}`,hidden=activeProfile()==='hidden';const item={id,name:file.name,type:file.type||'',blob:file,useWithCalendar:!hidden,useWithoutCalendar:hidden};await saveMediaItem(item);mediaItems.push(item);added++;}
      catch{flash(tr('mediaError'));break;}
    }
    mediaItems.sort((a,b)=>a.id.localeCompare(b.id));if(added){showMedia(mediaItems.length-1);flash(tr('imageAdded'));}e.target.value='';
  });
  $('removeBackground').addEventListener('click',()=>{if(currentMediaIndex>=0&&mediaItems[currentMediaIndex])removeMediaItem(mediaItems[currentMediaIndex].id);});
  $('clearBackground').addEventListener('click',()=>{showMedia(-1);try{localStorage.removeItem('wallpaperBackground');}catch{}$('wallpaper').style.backgroundImage='';flash(tr('defaultRestored'));});
  $('exportEvents').addEventListener('click',()=>{const blob=new Blob([JSON.stringify(events,null,2)],{type:'application/json'});const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download='calendar-plan.json';link.click();URL.revokeObjectURL(link.href);flash(tr('exported'));});
  $('importFile').addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);if(!Array.isArray(data)||data.some(x=>!x.date||!x.name))throw new Error();events=data.map(x=>({id:x.id||`${Date.now()}-${Math.random()}`,date:x.date,time:/^\d{2}:\d{2}$/.test(String(x.time||''))?String(x.time):'',name:String(x.name).slice(0,70),color:['mint','blue','amber','rose'].includes(x.color)?x.color:'mint'}));saveEvents();render();flash(tr('planLoaded'));}catch{flash(tr('badPlan'));}e.target.value='';};reader.readAsText(file);});
  $('icsFile').addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onerror=()=>flash(tr('readError'));reader.onload=()=>{try{const imported=parseIcs(String(reader.result));if(!imported.length)throw new Error('empty');const batchId=`ics-file:${file.name.toLocaleLowerCase()}`,importedUids=new Set(imported.map(item=>item.icsUid));events=events.filter(item=>item.source!=='ics'||(item.icsBatch!==batchId&&!importedUids.has(item.icsUid)));events.push(...imported.map(item=>({...item,icsBatch:batchId,icsBatchName:file.name,icsBatchHidden:false})));saveEvents();render();flash(`${imported.length} ${tr('icsLoaded')}`);}catch{flash(tr('badIcs'));}e.target.value='';};reader.readAsText(file);});
  setRatioChoice(localStorage.getItem('wallpaperRatio')||'auto');
  setTimelineOrientation(timelineOrientation);
  setCalendarStyle(localStorage.getItem('calendarStyle')||'grid');
  let initialImageFit='stretch';try{initialImageFit=localStorage.getItem('wallpaperImageFit')||'stretch';const fitMigrated=localStorage.getItem('wallpaperImageFitDefaultMigrated')==='yes';if(!fitMigrated&&initialImageFit==='contain')initialImageFit='stretch';localStorage.setItem('wallpaperImageFitDefaultMigrated','yes');}catch{initialImageFit='stretch';}setImageFit(initialImageFit);
  setAutoChangeBackgrounds(autoChangeBackgrounds?'yes':'no');
  setRotationSeconds(rotationSeconds);
  setLoopVideos(loopVideos?'yes':'no');
  applyLanguage(language);
  initMedia();
})();
