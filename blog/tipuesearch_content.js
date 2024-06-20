var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 w6 課程整理","text":"與 ChatGPT 的對話 與 ChatGPT 的對話, 了解有關 git 在不同專業領域的應用方法 1.根據自己專業： 1-1.)說明git的使用和與ChatGPT的對話 1-2.)內容需含git發展歷史 1-3.)創作人的履歷 1-4.)一般相同專業人士如何利用git解決內容管理問題？ 2.如果想在Windows實際使用demo git client與git server，該如何進行？ 3.練習git init到git push，個人自己建立倉儲分支環境練習上傳推送，並處理合併問題。 Git 歷史與希望解決的問題 問題: 請簡述一下 Git 的發展歷史, 以及當時的背景如何? Git 想要解決甚麼問題? ChatGPT 回答: Git 是由 Linus Torvalds 在 2005 年開始開發的分散式版本控制系統。在此之前，像 CVS 和 Subversion 等集中式版本控制系統存在著一些問題，比如需要與中央存儲庫保持連接、分支和合併操作複雜等。在 Linux 核心程式開發過程中，Torvalds 和其他開發者開始感受到集中式版本控制系統的種種限制和不便，這促使他開始開發一個更適合分散式開發的工具。 Git 的目標是解決集中式版本控制系統的一些瓶頸，包括： 性能問題：集中式版本控制系統在大型專案中操作效率低，尤其是在提交和合併時。 分支和合併操作的複雜性：在集中式系統中，分支和合併操作可能會變得耗時且複雜，過程中容易出現錯誤。 依賴中央存儲庫：集中式系統需要即時與資料伺服器連線，一旦斷線或伺服器故障，可能會導致開發過程中的中斷。 在這些問題的背後，是軟體開發過程的變化和複雜性增加。隨著項目變得越來越大，開發團隊變得分散，需要更靈活和高效率的工具來管理代碼。Git 的分散式架構允許開發人員在沒有連接到中央伺服器的情況下進行本地端操作，並且提供了高效的分支和合併機制，從而更有效滿足了協同需求。 因此，Git 的發展是在不斷變化和擴大的軟體開發生態系統中的一個自然回應，旨在解決集中式版本控制系統所遇到的種種挑戰，並為開發人員提供更好的工具和流程。 再問: 集中式版本控制系統為何在提交與合併上有性能問題? ChatGPT 回答: 集中式版本控制系統在提交和合併上可能會遇到性能問題，主要是由於以下幾個原因： 單一伺服器負載：在集中式版本控制系統中，所有的提交和合併操作都需要與中央伺服器進行連線。當開發人員數量增加，或者在大型項目中進行大量提交和合併操作時，這個中央伺服器可能會成為性能瓶頸，導致提交和合併操作的速度變慢。 網路延遲：因為提交和合併操作需要與中央伺服器進行連線，因此網路延遲也會影響操作的速度。特別是當開發人員分佈在不同的地理位置時，距離和網路品質都可能擴大延遲。 資料傳輸量：提交和合併操作可能涉及大量的資料傳輸，尤其是當提交或合併的檔案很大或者進行多次修改時。這些大量的資料傳輸需要消耗時間與頻寬，進一步影響操作的性能。 鎖定操作：有些集中式版本控制系統在提交和合併時可能會對文件或資料夾進行鎖定，以避免同時進行衝突的操作。這種鎖定操作可能會導致等待時間增加，特別是在多人同時進行操作的情況下。 因此，集中式版本控制系統的性能問題主要是由於其架構設計所導致，即所有操作都必須通過中央伺服器進行。因而限制了系統的擴展性和彈性，特別是在大型或分散式團隊中。 再問: 為何使用 Git 沒有單一伺服器負載問題? ChatGPT 回答: 使用 Git 沒有單一伺服器負載問題的主要原因是 Git 的分散式架構。在 Git 中，每一位開發人員都擁有一個完整的本地儲存庫（repository），這使得提交和合併操作不需要依賴於單一的中央伺服器。如此一來，就不會出現單一伺服器負載問題。 換言之，當開發人員在本地進行提交時，各協同人員只需將變更提交到自己的本地儲存庫中，而不是向中央伺服器提交。使得提交操作的速度不再受到中央伺服器的限制，而是受到本地計算機的性能限制，一般情況下會比提交到單一伺服器的執行速度快上許多。 當需要與其他開發人員共享變更時，Git 提供了分支和合併的機制，開發人員可以在本地進行分支和合併操作，而不需要直接與中央伺服器連線。使得提交和合併操作可以在本地進行，不受網路延遲和頻寬限制，從而更加快速並提高協同效率。 另外，即使在多人協作的情況下，由於每個開發人員都有自己的本地儲存庫，這些操作可以同步進行，而不會互相干擾或造成壓力集中在單一伺服器上。 因此，Git 的分散式架構使得提交和合併操作不再依賴於單一的中央伺服器，從而消除了單一伺服器負載問題，提高了系統的性能與彈性。 Git 如何解決產品設計問題 問題: 身為產品開發人員, 使用的是商用封閉的 CAD 套件, 該如何使用 Git 來提升工作效率? ChatGPT 回答: 即使使用商用封閉的 CAD 套件，仍然可以使用 Git 來提升工作效率。以下是一些使用 Git 的方式： 版本控制: 使用 Git 對 CAD 項目進行版本控制，可以跟蹤每個版本的變更，並輕鬆地回溯到先前的版本。這對於保留歷史記錄、管理修改和恢復意外更改非常有用。 分支管理: 在 Git 中使用分支來進行不同功能或版本的開發。你可以在不同的分支上同時進行不同的實驗和開發工作，而不會影響主要版本的開發。 協作與共享: 透過 Git，團隊成員可以輕鬆地共享各自的工作成果，進行協作開發。每個人可以在自己的分支上工作，然後通過合併請求（pull request）將修改合併到主分支中。 程式審查: 利用 Git 的分支和合併功能進行程式審查。團隊成員可以在專門的分支上提交各自編寫的程式變更，然後其他成員可以查看這些變更，提供意見和建議，最終通過合併到主分支中。 自動化流程: 使用 Git 配合持續集成（CI）和持續部署（CD）工具，自動化 CAD 項目的測試、構建和部署流程。這樣可以節省時間並降低錯誤，同時確保項目的品質和穩定性。 文檔和問題追蹤: 將 CAD 專案的文檔和問題追蹤整合到 Git 庫中，以便於跟蹤和管理。例如: 可以使用 Git 提供的 Wiki 功能來撰寫文檔，並使用 Issue 跟蹤功能來追蹤問題和任務。 因此，即使使用商用封閉的 CAD 套件，Git 仍然可以成為提升工作效率的強大工具，幫助團隊更好地協作、管理和追蹤 CAD 開發專案。 再問: 可是商用 CAD 採用 binary 格式的零件檔案, 在協同產品設計流程中, 該如何使用 Git 提升協同效能? ChatGPT 回答: 即使 CAD 文件是以 binary 格式保存的，你仍然可以使用 Git 來提升協同效能。以下是一些方法： 使用 LFS（Large File Storage）: Git LFS 是一個 Git 擴增模組，專門用於管理大型文件，包括 CAD 文件等二進制文件。透過 Git LFS，可以將大型 CAD 文件存儲在單獨的存儲庫中，而不會將它們放在 Git 存儲庫中，從而減少存儲庫大小和傳輸時間。 拆分項目: 將 CAD 項目拆分為更小的部分，每個部分都是可獨立開發和測試的。這樣可以降低對於 binary 文件的變更衝突，並使得協同開發更加順暢。 定期同步: 要求團隊成員定期將他們的工作同步到 Git 存儲庫中，以便及時發現和解決衝突。透過定期同步，可以最大程度地減少衝突和重複工作。 使用分支: 在 Git 中使用分支來進行不同功能或版本的開發。每個團隊成員可以在自己的分支上工作，而不會影響主要的生產環境。這樣可以提高彈性，同時減少對於 binary 文件的同時修改。 程式審查: 使用 Git 的分支和合併功能進行程式審查。每個成員在完成工作後，可以提交程式變更到自己的分支，然後發起合併請求。其他成員可以查看這些變更，提供意見和建議，確保程式的品質和穩定性。 文件管理: 使用 Git 存儲庫中的 Wiki 功能來管理 CAD 文件的相關文檔，包括設計文檔、變更日誌等。這樣可以使得團隊成員更容易地找到並理解 CAD 文件的相關訊息。 因此，即使 CAD 文件是以 binary 格式保存的，仍然可以通過合理使用 Git 和相應的工具來提升協同效能，降低衝突和重複工作，從而更加高效地進行協同產品設計流程。 再問: 若設計流程採用 Siemens NX 設計零組件, 若將每一個零組件的設計過程採 NXOpen Python 程式存檔, 並且透過設計參數進行零組件調控, 就採用 Git 分散式版本管理系統上, 會比直接使用 binary 格式更有效率嗎? ChatGPT 回答: 在將每個零組件的設計過程以 NXOpen Python 程式存檔的情況下，使用 Git 分散式版本管理系統相比直接使用 binary 格式可能會更有效率。這主要是因為： 可讀性和可比較性：使用 NXOpen Python 程式存檔可以使得零組件的設計過程更具有可讀性和可比較性。相比於 binary 格式，Python 程式碼可以被版本控制系統更好地管理，使得團隊成員可以更容易地查看、比較和理解每個零組件的設計過程。 易於跟蹤和管理：Python 程式存檔可以更輕鬆地跟蹤和管理設計過程中的變更。Git 可以記錄每次提交的修改，包括添加、刪除和修改的程式碼行數，從而使得團隊可以清楚地了解每個零組件的設計歷史和演變過程。 設計參數的調控：使用 Python 程式存檔可以更靈活地調控零組件的設計參數。可以使用程式碼來自動化設計過程，並且通過修改參數來調整零組件的性能和外觀，從而更有效地進行重複性流程設計以及最佳化。 協同開發與程式審查：與 binary 格式相比，Python 程式存檔更適合進行協同開發與程式碼的審查。團隊成員可以在版本控制系統中查看並評論每個零組件的設計程式碼，提供意見和建議，從而確保設計的品質和一致性。 因此，使用 NXOpen Python 程式存檔並結合 Git 分散式版本管理系統可以更有效地管理和控制零組件的設計過程，提高團隊的協同效率和設計品質。","tags":"w6","url":"./2024-Spring-w6-blog-tutorial.html"},{"title":"2024 w7 課程整理","text":"心得整理 心得整理 影片嵌入網站方法。 以超連結配合個人網站內的Source code 將影片複製後的超連結貼上，連結內有預設影片邊界 來源拉取等，除非想有特別需要調整，一般基本只要將其貼上即可。","tags":"w7","url":"./2024-Spring-w7-blog-tutorial.html"},{"title":"2024 w8 課程整理","text":"從教育的本質看網際內容管理 從教育的本質看課程內容 問chatgpt:請問甚麼是教育的本質? 答: 教育的本質是一個多層面的概念，涉及到知識、價值觀、技能和社會化等多個方面。總的來說，教育的本質是通過各種形式的學習和指導來促進個人的全面發展和成長。 知識的傳遞與掌握： 教育旨在將知識傳授給學生，使他們能夠理解和應用這些知識。這包括學習語言、數學、科學、歷史、文化等學科知識。 價值觀的塑造： 教育也扮演著塑造個人價值觀和道德觀念的重要角色。通過教育，人們學習社會準則、尊重他人、責任感等價值觀。 技能的培養： 教育提供了學習和發展各種技能的機會，包括認知技能（如思考、分析、解決問題）、社交技能（如合作、溝通）、實踐技能（如手工藝、運動）等。 社會化和個人成長： 教育不僅僅是在學校或課堂上進行的，它還涉及到社會環境中的各種學習和互動。通過與他人的交流和合作，個人在社會化過程中成長，學會適應和融入社會。 總的來說，教育的本質是通過知識、價值觀、技能和社會化的綜合作用，幫助個人實現全面的成長和發展，從而更好地適應和貢獻於社會。 問:那對大學教育的本質呢? 答: 大學教育的本質在某種程度上延續了教育的一般本質，但也有其特定的特點和目標。以下是大學教育的本質： 知識的深度和廣度： 大學教育旨在提供更深入和更廣泛的學術知識，並培養學生的批判性思維和問題解決能力。這包括專業知識、學科理論、研究方法等方面的學習。 專業技能的培養： 大學教育不僅關注學科知識，還強調培養學生在特定領域的專業技能。這些技能可能包括研究能力、創新能力、溝通能力、領導能力等，這些能力對於學生未來的職業發展至關重要。 思想和價值觀的塑造： 大學教育也致力於塑造學生的思想、價值觀和道德觀念。通過學術研究、社會實踐和校園文化等活動，大學教育有助於學生形成獨立思考、社會責任感和多元文化意識。 學術自由和創新： 大學教育強調學術自由和創新，鼓勵學生探索新的思想和理論，開展獨立研究，並在學術領域做出貢獻。 生涯規劃和職業發展： 大學教育不僅僅是為了知識和技能的獲取，還包括幫助學生進行生涯規劃和職業發展。大學通常提供職業指導、實習機會和就業服務，以幫助學生順利過渡到職業生涯。 總的來說，大學教育的本質是提供高等教育，通過深入的學術研究和專業培訓，培養學生的學術能力、專業素養和社會責任感，以滿足他們在學術、職業和社會生活中的需求。","tags":"w8","url":"./2024-Spring-w8-blog-tutorial.html"},{"title":"2024 w9 課程整理","text":"心得整理 w9心得整理 最近我開始意識到，人工智慧（AI）工具已經深深地融入了我的生活，不僅提高了我的效率，還幫助我解決了許多問題。 首先，AI工具在提高效率方面給我帶來了明顯的好處。比如，我經常使用智能手機上的智能助手來提醒我行程、查詢資訊，甚至解答我各種疑問。這幫助我節省了大量的時間，讓我更加專注於工作和生活中更重要的事情上。 其次，AI工具也在解決問題方面給了我很大的幫助。最明顯的例子就是在學習和工作中。我經常使用自然語言處理（NLP）工具來幫助我理解複雜的文章或文獻，進行快速的信息查詢和摘要生成。這大大提高了我的學習效率，幫助我更好地應對工作中的挑戰。 此外，AI工具還在許多其他方面給了我幫助。比如，在健康方面，我通過智能手環上的健康監測功能來記錄我的運動情況和睡眠狀態，幫助我更好地管理我的身體健康。在旅行方面，我通常使用智能導航應用來規劃路線和尋找景點，讓我的旅行更加順利和愉快。 總的來說，AI工具已經成為我生活中不可或缺的一部分，從提高效率到解決問題，它們為我帶來了許多便利和好處。我相信隨著技術的不斷發展和進步，AI工具將會在未來帶給我們更多的驚喜和改變。 在了解什麼是AI的過程當中，我查到了AI較類似背後有一個大型數據庫，每分每秒都在自我學習、自我提升所以只要我們丟問題給AI，只要是在他的資料庫裡的，他都能夠回答得出來，所以我認為我也要向AI學習，自我成長、自我提升。","tags":"w9","url":"./2024-Spring-w9-blog-tutorial.html"},{"title":"2024 w5 課程整理","text":"Replit分組平台倉儲設定 本周心得記錄 事先預習上課可能會講解內容，了解iframe是什麼和相關應用。 內容會以iframe來插入前幾周的教學影片，並摘要各影片內容。 1.Replit分組平台倉儲設定。 2.使用可攜檔裡的Putty-solvespace.exe(STL)，零件檢視方法。 3.使用近端可攜程式，維護更新自己及分組倉儲。 參考實作教學影片請到youtube iframe 可攜檔 STL youtube","tags":"w5","url":"./2024-Spring-w5-blog-tutorial.html"},{"title":"2024 w4 課程整理","text":"Replit靜態 本週整理心得 我最近打造了自己的個人網站，想分享一下我的心得。首先，我用了GitHub倉儲管理網站內容，這樣就能隨時追蹤內容的改版歷程，也方便與團隊合作。然後，我利用GitHub Pages建立了網站，這樣我就無需擔心伺服器問題，網站能自動更新。為了更輕鬆編輯內容，我開發了一個網頁編輯系統，讓我能快速編輯和管理網站內容。最後，我將網站的啟動網址設置為外部IP，這樣無論身在何處，都能輕鬆編輯我的網站。總的來說，這次打造網站的過程讓我更了解了網站開發，也提高了效率，希望能繼續完善我的網站，分享更多有價值的內容。 Replit靜態網站檢視 main2.txt","tags":"w4","url":"./2024-Spring-w4-blog-tutorial.html"},{"title":"2024 w3 課程整理","text":"Replit, Github Codespaces, Gitpod 如何利用可攜系統維護個人與分組網站 利用 Github Classroom 分組 在WCM第三週教學內容，整理重點。(都有放相關或參照連結) 1.關於git常用指。 2.利用Wink建立操作影片。(安裝下載檔) 3.如何使用submoduie來創建個人子模組。(導師操作觀念影片) 4.說明如何使用replit維護網站。","tags":"w3","url":"./2024-Spring-w3-blog-tutorial.html"},{"title":"2024 w2 課程整理","text":"replit介紹及操作 replit","tags":"w2","url":"./2024-Spring-w2-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統1 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};