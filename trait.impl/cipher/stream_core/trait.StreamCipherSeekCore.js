(function() {
    var implementors = Object.fromEntries([["chacha20",[["impl <a class=\"trait\" href=\"cipher/stream_core/trait.StreamCipherSeekCore.html\" title=\"trait cipher::stream_core::StreamCipherSeekCore\">StreamCipherSeekCore</a> for <a class=\"struct\" href=\"chacha20/struct.ChaCha20LegacyCore.html\" title=\"struct chacha20::ChaCha20LegacyCore\">ChaCha20LegacyCore</a>"],["impl&lt;R: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"cipher/stream_core/trait.StreamCipherSeekCore.html\" title=\"trait cipher::stream_core::StreamCipherSeekCore\">StreamCipherSeekCore</a> for <a class=\"struct\" href=\"chacha20/struct.ChaChaCore.html\" title=\"struct chacha20::ChaChaCore\">ChaChaCore</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"cipher/stream_core/trait.StreamCipherSeekCore.html\" title=\"trait cipher::stream_core::StreamCipherSeekCore\">StreamCipherSeekCore</a> for <a class=\"struct\" href=\"chacha20/struct.XChaChaCore.html\" title=\"struct chacha20::XChaChaCore\">XChaChaCore</a>&lt;R&gt;"]]],["ctr",[["impl&lt;C, F&gt; <a class=\"trait\" href=\"cipher/stream_core/trait.StreamCipherSeekCore.html\" title=\"trait cipher::stream_core::StreamCipherSeekCore\">StreamCipherSeekCore</a> for <a class=\"struct\" href=\"ctr/struct.CtrCore.html\" title=\"struct ctr::CtrCore\">CtrCore</a>&lt;C, F&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"cipher/block/trait.BlockEncryptMut.html\" title=\"trait cipher::block::BlockEncryptMut\">BlockEncryptMut</a> + <a class=\"trait\" href=\"cipher/block/trait.BlockCipher.html\" title=\"trait cipher::block::BlockCipher\">BlockCipher</a>,\n    F: <a class=\"trait\" href=\"ctr/flavors/trait.CtrFlavor.html\" title=\"trait ctr::flavors::CtrFlavor\">CtrFlavor</a>&lt;C::<a class=\"associatedtype\" href=\"crypto_common/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type crypto_common::BlockSizeUser::BlockSize\">BlockSize</a>&gt;,</div>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[1210,909]}